import {ApolloServer} from 'apollo-server';
import typeDefs from './db/schema';
import resolvers from './db/resolvers';
import conectarDB from './config/db';
import jwt from 'jsonwebtoken';
import config from './config/config';
//conectar a la base de datos

conectarDB();

/// server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
      //console.log(req.headers["authorization"]);
      const token = req.headers['authorization'] || '';
      if(token) {
        try {
          const usuario = jwt.verify(token, config.jwtSecret)

          //console.log(usuario);

          return {usuario};
        } catch (error) {
          console.log('Hubo un error');
          console.log(error);
        }
      }
    }
});

//start server
server.listen().then( ({url}: any) => {
  console.log(`Servidor listo en la URL ${url}`)  
})