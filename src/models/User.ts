import {Schema, model, Document} from "mongoose";

export interface User extends Document {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    creado: Date;
    id: string;
}

const UsuariosSchema: Schema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    creado: {
        type: Date,
        default: Date.now(),
    },
    id: {
        type: String,
        unique: true,
    }
});



export default model<User>('Usuario',UsuariosSchema);