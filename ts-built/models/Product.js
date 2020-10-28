"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductosSchema = new mongoose_1.Schema({
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
        required: true
    }
});
exports.default = mongoose_1.model('Producto', ProductosSchema);
//# sourceMappingURL=Product.js.map