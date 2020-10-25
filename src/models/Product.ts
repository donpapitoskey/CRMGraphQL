import {Schema, model} from 'mongoose';


export interface Product extends Document {
    nombre: string;
    existencia: number;
    precio: number;
    creado: Date;
    id: string;
}


const ProductosSchema = new  Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    existencia: {
        type: Number,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

export default model('Producto',ProductosSchema);