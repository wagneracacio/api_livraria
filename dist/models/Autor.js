"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const autorSchema = new mongoose_1.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
}, {
    versionKey: false,
});
const autores = (0, mongoose_1.model)("autores", autorSchema);
exports.default = autores;
