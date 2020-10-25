"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
//const {ApolloServer} = require('apollo-server');
var schema_1 = __importDefault(require("./db/schema"));
//const  typeDefs = require('./db/schema');
var resolvers_1 = __importDefault(require("./db/resolvers"));
//const resolvers = require('./db/resolvers');
var db_1 = __importDefault(require("./config/db"));
//const conectarDB = require('./config/db');
//conectar a la base de datos
db_1.default();
/// server
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
});
//start server
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Servidor listo en la URL " + url);
});
//# sourceMappingURL=index.js.map