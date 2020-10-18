const {ApolloServer} = require('apollo-server');
const  typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

//conectar a la base de datos

conectarDB();

/// server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


//start server
server.listen().then( ({url}) => {
  console.log(`Servidor listo en la URL ${url}`)  
})