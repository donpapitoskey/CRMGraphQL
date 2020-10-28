"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
//const { gql} = require('apollo-server');
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Usuario{\n        id: ID\n        nombre: String\n        apellido: String\n        email: String\n        creato: String\n    }\n    \n    type Token {\n        token: String\n    }\n\n    type Producto {\n        id: ID\n        nombre: String\n        existencia: Int\n        precio: Float\n        creado: String\n    }\n\n    type Cliente {\n        id: ID\n        nombre: String\n        apellido: String\n        empresa: String\n        email: String\n        telefono: String\n        vendedor: ID\n    }\n\n    type Pedido {\n        id: ID\n        pedido: [PedidoGrupo]\n        total: Float\n        cliente: ID\n        vendedor: ID\n        fecha: String\n        estado: EstadoPedido\n    }\n\n    type PedidoGrupo {\n        id: ID\n        cantidad: Int\n    }\n\n\n    input UsuarioInput {\n        nombre: String!\n        apellido: String!\n        email: String!\n        password: String!\n    }\n\n    input AutenticarInput {\n        email: String\n        password: String\n    }\n\n    input ProductoInput {\n        nombre: String!\n        existencia: Int!\n        precio: Float!\n    }\n\n    input ClienteInput {\n        nombre: String!\n        apellido: String!\n        empresa: String!\n        email: String!\n        telefono: String\n    }\n\n    input PedidoProductoInput {\n        id: ID\n        cantidad: Int\n    }\n\n    input PedidoInput {\n        pedido: [PedidoProductoInput]\n        total: Float!\n        cliente: ID!\n        estado: EstadoPedido\n    }\n\n    enum EstadoPedido { # para valores fijos en un input\n        PENDIENTE\n        COMPLETADO\n        CANCELADO\n    } \n\n    type Query {\n        #Usuarios\n        obtenerUsuario(token: String!): Usuario\n\n        #Productos\n        obtenerProductos: [Producto]\n        obtenerProducto(id : ID!): Producto\n\n        #Clientes\n        obtenerClientes: [Cliente]\n        obtenerClientesVendedor: [Cliente]\n        obtenerCliente(id: ID!): Cliente\n    }\n    \n\n    type Mutation {\n        # Usuarios\n        nuevoUsuario(input: UsuarioInput) : Usuario\n        autenticarUsuario(input: AutenticarInput) : Token\n\n        # Productos\n        nuevoProducto(input: ProductoInput) : Producto\n        actualizarProducto(id: ID!, input: ProductoInput): Producto\n        eliminarProducto(id: ID!) : String\n\n        # Clientes\n        nuevoCliente(input: ClienteInput): Cliente\n        actualizarCliente(id: ID!, input: ClienteInput): Cliente\n        eliminarCliente(id: ID!): String\n\n        # Pedidos\n        nuevoPedido(input: PedidoInput): Pedido\n    }\n"], ["\n    type Usuario{\n        id: ID\n        nombre: String\n        apellido: String\n        email: String\n        creato: String\n    }\n    \n    type Token {\n        token: String\n    }\n\n    type Producto {\n        id: ID\n        nombre: String\n        existencia: Int\n        precio: Float\n        creado: String\n    }\n\n    type Cliente {\n        id: ID\n        nombre: String\n        apellido: String\n        empresa: String\n        email: String\n        telefono: String\n        vendedor: ID\n    }\n\n    type Pedido {\n        id: ID\n        pedido: [PedidoGrupo]\n        total: Float\n        cliente: ID\n        vendedor: ID\n        fecha: String\n        estado: EstadoPedido\n    }\n\n    type PedidoGrupo {\n        id: ID\n        cantidad: Int\n    }\n\n\n    input UsuarioInput {\n        nombre: String!\n        apellido: String!\n        email: String!\n        password: String!\n    }\n\n    input AutenticarInput {\n        email: String\n        password: String\n    }\n\n    input ProductoInput {\n        nombre: String!\n        existencia: Int!\n        precio: Float!\n    }\n\n    input ClienteInput {\n        nombre: String!\n        apellido: String!\n        empresa: String!\n        email: String!\n        telefono: String\n    }\n\n    input PedidoProductoInput {\n        id: ID\n        cantidad: Int\n    }\n\n    input PedidoInput {\n        pedido: [PedidoProductoInput]\n        total: Float!\n        cliente: ID!\n        estado: EstadoPedido\n    }\n\n    enum EstadoPedido { # para valores fijos en un input\n        PENDIENTE\n        COMPLETADO\n        CANCELADO\n    } \n\n    type Query {\n        #Usuarios\n        obtenerUsuario(token: String!): Usuario\n\n        #Productos\n        obtenerProductos: [Producto]\n        obtenerProducto(id : ID!): Producto\n\n        #Clientes\n        obtenerClientes: [Cliente]\n        obtenerClientesVendedor: [Cliente]\n        obtenerCliente(id: ID!): Cliente\n    }\n    \n\n    type Mutation {\n        # Usuarios\n        nuevoUsuario(input: UsuarioInput) : Usuario\n        autenticarUsuario(input: AutenticarInput) : Token\n\n        # Productos\n        nuevoProducto(input: ProductoInput) : Producto\n        actualizarProducto(id: ID!, input: ProductoInput): Producto\n        eliminarProducto(id: ID!) : String\n\n        # Clientes\n        nuevoCliente(input: ClienteInput): Cliente\n        actualizarCliente(id: ID!, input: ClienteInput): Cliente\n        eliminarCliente(id: ID!): String\n\n        # Pedidos\n        nuevoPedido(input: PedidoInput): Pedido\n    }\n"])));
/*Depronto para Schema manejar un archivo de mutation

*/
exports.default = typeDefs;
var templateObject_1;
//# sourceMappingURL=schema.js.map