import Usuario, {User} from '../models/User';
import Producto, {Product} from '../models/Product'
import Cliente, {Client} from '../models/Client';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { UserInputError } from 'apollo-server';
//require('dotenv').config({path: 'variables.env'});

interface Token {
    usuario: User;
    secreta: string;
    expiresIn: string;
}

const crearToken = ({usuario, secreta, expiresIn}:Token):string => {
    console.log(`This is the info of the token: \n${usuario}`);
    const {_id, email, nombre, apellido} = usuario;
    return jwt.sign({id:_id, email, nombre, apellido},secreta, {expiresIn})

};

//resolvers

const resolvers = {
    Query: {
        obtenerUsuario: async (_:any, {token}:{token:string} ) => {
            //const usuarioId = await jwt.verify(token, process.env.SECRETA)
            const usuarioId = await jwt.verify(token, config.jwtSecret);

            return usuarioId
        },
        obtenerProductos: async () => {
            try {
                const productos = await Producto.find({});
                return productos;
            } catch (error){
                console.log(error);
            }
        },
        obtenerProducto: async (_:any,{id}:{id:number}) => {
            //revisar producto existe
            const producto = await Producto.findById(id);

            if(!producto) {
                throw new Error('Producto no encontrado');
            }
            return producto;
        },
        obtenerClientes: async () => {
            try {
                const clientes = await Cliente.find({});
                return clientes;
            }catch (error) {
                console.log(error);
            }
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
                token: crearToken({usuario:existeUsuario, secreta:config.jwtSecret , expiresIn:'24h'})
            }

        },
        nuevoProducto: async (_:any,{input}:{input:Product}) => {
            try {
                const producto = new Producto(input);

                //almacenar

                const resultado = await producto.save();

                return resultado;
            } catch (error){
                throw new Error(error);
            }

        },
        actualizarProducto: async (_:any,{id,input}:{id:number,input:Product}) => {
            // check existence
            let producto = await Producto.findById(id);

            if(!producto) {
                throw new Error('Producto no encontrado');
            }
            //store in DB
            producto = await Producto.findOneAndUpdate({_id:id},input, {new:true});

            return producto;
        },
        eliminarProducto: async (_:any,{id}:{id:number}) => {
            let producto = await Producto.findById(id);

            if(!producto) {
                throw new Error('Producto no encontrado');
            }
            await Producto.findOneAndDelete({_id:id});
            return "Producto Eliminado";
        },
        nuevoCliente: async (_:any, {input}:{input:Client}, ctx:any) => {
            
            console.log(input);
            const {email} = input;

            // Verify registered client
            //console.log(input);
            
            const cliente = await Cliente.findOne({email});
            
            if(cliente) {
                throw new Error('Ese cliente ya esta registrado');
            }
            const nuevoCliente = new Cliente(input);
            
            ///asign vendor
            
            nuevoCliente.vendedor = ctx.usuario.id
            
            // store in DB
            try {
            console.log(nuevoCliente);
            const result = await nuevoCliente.save();
            return result;
            } catch (error) {
                console.log(error);
            }
        }

    }
}

export type resolversType = typeof resolvers;
export default resolvers;
