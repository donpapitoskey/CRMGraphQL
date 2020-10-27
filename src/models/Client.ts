import {Schema, model, Document} from "mongoose";

export interface Client extends Document {
    nombre: string;
    apellido: string;
    email: string;
    empresa: string;
    telefono: string;
    creado: Date;
    vendedor: string;
    id: string;
}

const ClientesSchema: Schema = new Schema({
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
    empresa: {
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
    telefono: {
        type: String,
        trim: true,
    },
    creado:{
      type: Date,
      default: Date.now(),
    },
    vendedor:{
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Usuario', //name of model 
    },
    id: {
        type: String,
        unique: true,
    }
});

export default model<Client>('Cliente',ClientesSchema);
