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

    type Query {
        obtenerUsuario(token: String!): Usuario
    }

    type Mutation {
        # Usuarios
        nuevoUsuario(input: UsuarioInput) : Usuario
        autenticarUsuario(input: AutenticarInput) : Token

        # Productos
        nuevoProducto(input: ProductoInput) : Producto
    }
`;

export default  typeDefs;