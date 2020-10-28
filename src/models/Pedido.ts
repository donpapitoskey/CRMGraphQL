import {Schema, Document, model } from 'mongoose';
import {Product} from './Product';

export interface Pedido extends Document {
  cantidad: Number;
}

export interface Lists extends Document {
  pedido: Array<Pedido>;
  total: Number;
  cliente: string;
  vendedor: String;
  estado: String;
  creado: Date;
};

const ProductoSchema = new Schema({
  pedido: {
    type: Array,
    required:true
  },
  total: {
    type: Number,
    required: true
  },
  cliente: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Cliente'
  },
  vendedor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Usuario'
  },
  estado: {
    type: String,
    default: "PENDIENTE"
  },
  creado: {
    type: Date,
    default: Date.now()
  }
});

export default model<Lists>('Pedido',ProductoSchema);
