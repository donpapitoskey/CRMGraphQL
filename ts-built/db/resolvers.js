"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../models/User"));
var Product_1 = __importDefault(require("../models/Product"));
var Client_1 = __importDefault(require("../models/Client"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
;
var crearToken = function (_a) {
    var usuario = _a.usuario, secreta = _a.secreta, expiresIn = _a.expiresIn;
    console.log("This is the info of the token: \n" + usuario);
    var _id = usuario._id, email = usuario.email, nombre = usuario.nombre, apellido = usuario.apellido;
    return jsonwebtoken_1.default.sign({ id: _id, email: email, nombre: nombre, apellido: apellido }, secreta, { expiresIn: expiresIn });
};
//resolvers
var resolvers = {
    Query: {
        obtenerUsuario: function (_, _a) {
            var token = _a.token;
            return __awaiter(void 0, void 0, void 0, function () {
                var usuarioId;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret)];
                        case 1:
                            usuarioId = _b.sent();
                            return [2 /*return*/, usuarioId];
                    }
                });
            });
        },
        obtenerProductos: function () { return __awaiter(void 0, void 0, void 0, function () {
            var productos, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_1.default.find({})];
                    case 1:
                        productos = _a.sent();
                        return [2 /*return*/, productos];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        obtenerProducto: function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var producto;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Product_1.default.findById(id)];
                        case 1:
                            producto = _b.sent();
                            if (!producto) {
                                throw new Error('Producto no encontrado');
                            }
                            return [2 /*return*/, producto];
                    }
                });
            });
        },
        obtenerClientes: function () { return __awaiter(void 0, void 0, void 0, function () {
            var clientes, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Client_1.default.find({})];
                    case 1:
                        clientes = _a.sent();
                        return [2 /*return*/, clientes];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        obtenerClientesVendedor: function (_, _a, ctx) { return __awaiter(void 0, void 0, void 0, function () {
            var clientes, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Client_1.default.find({ vendedor: ctx.usuario.id.toString() })];
                    case 1:
                        clientes = _b.sent();
                        return [2 /*return*/, clientes];
                    case 2:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        obtenerCliente: function (_, _a, ctx) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var cliente;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Client_1.default.findById(id)];
                        case 1:
                            cliente = _b.sent();
                            if (!cliente) {
                                throw new Error("Cliente no encontrado");
                            }
                            //Quien lo creo
                            if (cliente.vendedor.toString() !== ctx.usuario.id) {
                                throw new Error("No tienes las credenciales");
                            }
                            return [2 /*return*/, cliente];
                    }
                });
            });
        }
    },
    Mutation: {
        nuevoUsuario: function (_, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var email, password, existeUsuario, salt, _b, usuario;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            email = input.email, password = input.password;
                            return [4 /*yield*/, User_1.default.findOne({ email: email })];
                        case 1:
                            existeUsuario = _c.sent();
                            console.log(existeUsuario);
                            if (existeUsuario) {
                                throw new Error('El usuario ya esta registrado');
                            }
                            return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
                        case 2:
                            salt = _c.sent();
                            _b = input;
                            return [4 /*yield*/, bcryptjs_1.default.hash(password, salt)];
                        case 3:
                            _b.password = _c.sent();
                            //Guardar en DB
                            try {
                                usuario = new User_1.default(input);
                                usuario.save();
                                return [2 /*return*/, usuario];
                            }
                            catch (error) {
                                console.log(error);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        autenticarUsuario: function (_, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var email, password, existeUsuario, passwortCorrect;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(input);
                            email = input.email, password = input.password;
                            return [4 /*yield*/, User_1.default.findOne({ email: email })];
                        case 1:
                            existeUsuario = _b.sent();
                            if (!existeUsuario) {
                                throw new Error('El usuairo no existe');
                            }
                            return [4 /*yield*/, bcryptjs_1.default.compare(password, existeUsuario.password)];
                        case 2:
                            passwortCorrect = _b.sent();
                            if (!passwortCorrect) {
                                throw new Error('El password es incorrecto');
                            }
                            //token creation
                            return [2 /*return*/, {
                                    token: crearToken({ usuario: existeUsuario, secreta: config_1.default.jwtSecret, expiresIn: '24h' })
                                }];
                    }
                });
            });
        },
        nuevoProducto: function (_, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var producto, resultado, error_4;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            producto = new Product_1.default(input);
                            return [4 /*yield*/, producto.save()];
                        case 1:
                            resultado = _b.sent();
                            return [2 /*return*/, resultado];
                        case 2:
                            error_4 = _b.sent();
                            throw new Error(error_4);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        actualizarProducto: function (_, _a) {
            var id = _a.id, input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var producto;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Product_1.default.findById(id)];
                        case 1:
                            producto = _b.sent();
                            if (!producto) {
                                throw new Error('Producto no encontrado');
                            }
                            return [4 /*yield*/, Product_1.default.findOneAndUpdate({ _id: id }, input, { new: true })];
                        case 2:
                            //store in DB
                            producto = _b.sent();
                            return [2 /*return*/, producto];
                    }
                });
            });
        },
        eliminarProducto: function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var producto;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Product_1.default.findById(id)];
                        case 1:
                            producto = _b.sent();
                            if (!producto) {
                                throw new Error('Producto no encontrado');
                            }
                            return [4 /*yield*/, Product_1.default.findOneAndDelete({ _id: id })];
                        case 2:
                            _b.sent();
                            return [2 /*return*/, "Producto Eliminado"];
                    }
                });
            });
        },
        nuevoCliente: function (_, _a, ctx) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var email, cliente, nuevoCliente, result, error_5;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(input);
                            email = input.email;
                            return [4 /*yield*/, Client_1.default.findOne({ email: email })];
                        case 1:
                            cliente = _b.sent();
                            if (cliente) {
                                throw new Error('Ese cliente ya esta registrado');
                            }
                            nuevoCliente = new Client_1.default(input);
                            ///asign vendor
                            nuevoCliente.vendedor = ctx.usuario.id;
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, nuevoCliente.save()];
                        case 3:
                            result = _b.sent();
                            return [2 /*return*/, result];
                        case 4:
                            error_5 = _b.sent();
                            console.log(error_5);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        },
        actualizarCliente: function (_, _a, ctx) {
            var id = _a.id, input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var cliente;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Client_1.default.findById(id)];
                        case 1:
                            cliente = _b.sent();
                            // Verify existence
                            if (!cliente) {
                                throw new Error("Ese cliente no existe");
                            }
                            //Verify vendor
                            if (cliente.vendedor.toString() !== ctx.usuario.id) {
                                throw new Error("No tienes las credenciales");
                            }
                            return [4 /*yield*/, Client_1.default.findOneAndUpdate({ _id: id }, input, { new: true })];
                        case 2:
                            //Store it
                            cliente = _b.sent();
                            return [2 /*return*/, cliente];
                    }
                });
            });
        },
        eliminarCliente: function (_, _a, ctx) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var cliente;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Client_1.default.findById(id)];
                        case 1:
                            cliente = _b.sent();
                            // Verify existence
                            if (!cliente) {
                                throw new Error("Ese cliente no existe");
                            }
                            //Verify vendor
                            if (cliente.vendedor.toString() !== ctx.usuario.id) {
                                throw new Error("No tienes las credenciales");
                            }
                            //Delete it
                            return [4 /*yield*/, Client_1.default.findOneAndDelete({ _id: id })];
                        case 2:
                            //Delete it
                            _b.sent();
                            return [2 /*return*/, "Cliente eliminado"];
                    }
                });
            });
        },
        nuevoPedido: function (_, _a, ctx) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var cliente, clienteExiste, _b, _c, item, id, producto, e_1_1;
                var e_1, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            cliente = input.cliente;
                            return [4 /*yield*/, Client_1.default.findById(cliente)];
                        case 1:
                            clienteExiste = _e.sent();
                            if (!clienteExiste) {
                                throw new Error('Ese cliente no existe');
                            }
                            //Verificar si el cliente es del vendedor
                            if (clienteExiste.vendedor.toString() !== ctx.usuario.id) {
                                throw new Error('No tienes las credenciales para ello');
                            }
                            _e.label = 2;
                        case 2:
                            _e.trys.push([2, 8, 9, 14]);
                            _b = __asyncValues(input.pedido);
                            _e.label = 3;
                        case 3: return [4 /*yield*/, _b.next()];
                        case 4:
                            if (!(_c = _e.sent(), !_c.done)) return [3 /*break*/, 7];
                            item = _c.value;
                            id = item.id;
                            return [4 /*yield*/, Product_1.default.findById(id)];
                        case 5:
                            producto = _e.sent();
                            if (!producto) {
                                throw new Error("Producto no existe");
                            }
                            if (item.cantidad > producto.existencia) {
                                throw new Error("El articulo " + producto.nombre + " excede la cantidad disponible");
                            }
                            console.log(producto);
                            _e.label = 6;
                        case 6: return [3 /*break*/, 3];
                        case 7: return [3 /*break*/, 14];
                        case 8:
                            e_1_1 = _e.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 14];
                        case 9:
                            _e.trys.push([9, , 12, 13]);
                            if (!(_c && !_c.done && (_d = _b.return))) return [3 /*break*/, 11];
                            return [4 /*yield*/, _d.call(_b)];
                        case 10:
                            _e.sent();
                            _e.label = 11;
                        case 11: return [3 /*break*/, 13];
                        case 12:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 13: return [7 /*endfinally*/];
                        case 14:
                            console.log(input.pedido);
                            return [2 /*return*/];
                    }
                });
            });
        }
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map