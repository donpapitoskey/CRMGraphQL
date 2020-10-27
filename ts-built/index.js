"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("./db/schema"));
var resolvers_1 = __importDefault(require("./db/resolvers"));
var db_1 = __importDefault(require("./config/db"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("./config/config"));
//conectar a la base de datos
db_1.default();
/// server
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    context: function (_a) {
        var req = _a.req;
        //console.log(req.headers["authorization"]);
        var token = req.headers['authorization'] || '';
        if (token) {
            try {
                var usuario = jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
                //console.log(usuario);
                return { usuario: usuario };
            }
            catch (error) {
                console.log('Hubo un error');
                console.log(error);
            }
        }
    }
});
//start server
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Servidor listo en la URL " + url);
});
//# sourceMappingURL=index.js.map