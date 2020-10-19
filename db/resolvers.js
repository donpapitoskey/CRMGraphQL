const Usuario = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});


const crearToken = (usuario, secreta, expiresIn) => {
    console.log(usuario);
    const {id, email, nombre, apellido} = usuario;

    return jwt.sign({id}, secreta, {expiresIn})

};

//resolvers

const resolvers = {
    Query: {
        obtenerUsuario: async (_, {token}) => {
            const usuarioId = await jwt.verify(token, process.env.SECRETA)

            return usuarioId
        }
    },
    Mutation: {
        nuevoUsuario: async (_, {input}) => {
            
            const { email, password} = input;

            // Revisar Usuario registrado
            const existeUsuario = await Usuario.findOne({ email});
            console.log(existeUsuario);
            if(existeUsuario) {
                throw new Error('El usuario ya esta registrado');
            }

            //Hashear password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password,salt);
            //Guardar en DB

            try {
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;
            } catch(error){
                console.log(error);
            }
        },
        autenticarUsuario: async (_, {input}) => {

            console.log(input);
            const { email, password } = input;
            //usuario existe
            const existeUsuario = await Usuario.findOne({email});
            if(!existeUsuario){
                throw new Error('El usuairo no existe');
            }
            //check password
            const passwortCorrect = await bcryptjs.compare(password, existeUsuario.password);
            if(!passwortCorrect){
                throw new Error('El password es incorrecto');
            }

            //token creation

            return {
                token: crearToken(existeUsuario, process.env.SECRETA, '24h')
            }

        }
    }
}

module.exports = resolvers;