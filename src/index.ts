import {ApolloServer} from 'apollo-server';
//const {ApolloServer} = require('apollo-server');
import typeDefs from './db/schema';
//const  typeDefs = require('./db/schema');
import resolvers from './db/resolvers';
//const resolvers = require('./db/resolvers');
import conectarDB from './config/db';
//const conectarDB = require('./config/db');

//conectar a la base de datos

conectarDB();

/// server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//start server
server.listen().then( ({url}: any) => {
  console.log(`Servidor listo en la URL ${url}`)  
})