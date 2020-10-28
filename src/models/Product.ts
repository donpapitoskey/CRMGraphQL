import {Schema, model, Document} from 'mongoose';


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
    },
    id: {
        type: String,
        required:true
    }
});

export default model<Product>('Producto',ProductosSchema);