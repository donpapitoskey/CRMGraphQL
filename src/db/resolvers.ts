import Usuario, {User} from '../models/User';
import Producto from '../models/Product'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config';
//require('dotenv').config({path: 'variables.env'});

interface Token {
    usuario: User;
    secreta: string;
    expiresIn: string;
}


const crearToken = ({usuario, secreta, expiresIn}:Token):string => {
    console.log(usuario);
    const {id} = usuario;

    return jwt.sign({id}, secreta, {expiresIn})

};

//resolvers

const resolvers = {
    Query: {
        obtenerUsuario: async (_:any, {token}:{token:string} ) => {
            //const usuarioId = await jwt.verify(token, process.env.SECRETA)
            const usuarioId = await jwt.verify(token, config.jwtSecret)

            return usuarioId
        }
    },
    Mutation: {
        nuevoUsuario: async (_:any, {input}:{input:User}) => {
            
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
        autenticarUsuario: async (_:any, {input}:{input:User}) => {

            console.log(input);
            const { email, password } = input;
            //usuario existe
            const existeUsuario: User | null = await Usuario.findOne({email});
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
                token: crearToken({usuario:existeUsuario, secreta:config.jwtSecret,expiresIn:'24h'})
            }

        },
        nuevoProducto: async (_:any,{input}:{input:User}) => {
            try {
                const producto = new Producto(input);

                //almacenar

                const resultado = await producto.save();

                return resultado;
            } catch (error){
                throw new Error(error);
            }

        }
    }
}

export type resolversType = typeof resolvers;
export default resolvers;