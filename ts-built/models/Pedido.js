"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var ProductoSchema = new mongoose_1.Schema({
    pedido: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Cliente'
    },
    vendedor: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.default = mongoose_1.model('Pedido', ProductoSchema);
//# sourceMappingURL=Pedido.js.map