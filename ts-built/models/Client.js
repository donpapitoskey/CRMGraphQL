"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ClientesSchema = new mongoose_1.Schema({
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
    creado: {
        type: Date,
        default: Date.now(),
    },
    vendedor: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario',
    },
    id: {
        type: String,
        unique: true,
    }
});
exports.default = mongoose_1.model('Cliente', ClientesSchema);
//# sourceMappingURL=Client.js.map