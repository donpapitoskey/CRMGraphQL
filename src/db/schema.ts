import {gql} from 'apollo-server';
//const { gql} = require('apollo-server');

const typeDefs = gql`
    type Usuario{
        id: ID
        nombre: String
        apellido: String
        email: String
        creato: String
    }
    
    type Token {
        token: String
    }

    type Producto {
        id: ID
        nombre: String
        existencia: Int
        precio: Float
        creado: String
    }

    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
        telefono: String
        vendedor: ID
    }

    type Pedido {
        id: ID
        pedido: [PedidoGrupo]
        total: Float
        cliente: ID
        vendedor: ID
        fecha: String
        estado: EstadoPedido
    }

    type PedidoGrupo {
        id: ID
        cantidad: Int
    }


    input UsuarioInput {
        nombre: String!
        apellido: String!
        email: String!
        password: String!
    }

    input AutenticarInput {
        email: String
        password: String
    }

    input ProductoInput {
        nombre: String!
        existencia: Int!
        precio: Float!
    }

    input ClienteInput {
        nombre: String!
        apellido: String!
        empresa: String!
        email: String!
        telefono: String
    }

    input PedidoProductoInput {
        id: ID
        cantidad: Int
    }

    input PedidoInput {
        pedido: [PedidoProductoInput]
        total: Float!
        cliente: ID!
        estado: EstadoPedido
    }

    enum EstadoPedido { # para valores fijos en un input
        PENDIENTE
        COMPLETADO
        CANCELADO
    } 

    type Query {
        #Usuarios
        obtenerUsuario(token: String!): Usuario

        #Productos
        obtenerProductos: [Producto]
        obtenerProducto(id : ID!): Producto

        #Clientes
        obtenerClientes: [Cliente]
        obtenerClientesVendedor: [Cliente]
        obtenerCliente(id: ID!): Cliente
    }
    

    type Mutation {
        # Usuarios
        nuevoUsuario(input: UsuarioInput) : Usuario
        autenticarUsuario(input: AutenticarInput) : Token

        # Productos
        nuevoProducto(input: ProductoInput) : Producto
        actualizarProducto(id: ID!, input: ProductoInput): Producto
        eliminarProducto(id: ID!) : String

        # Clientes
        nuevoCliente(input: ClienteInput): Cliente
        actualizarCliente(id: ID!, input: ClienteInput): Cliente
        eliminarCliente(id: ID!): String

        # Pedidos
        nuevoPedido(input: PedidoInput): Pedido
    }
`;


/*Depronto para Schema manejar un archivo de mutation

*/
export default  typeDefs;
