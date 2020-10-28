"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PedidosSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.model('Usuario', PedidosSchema);
//# sourceMappingURL=User.js.map