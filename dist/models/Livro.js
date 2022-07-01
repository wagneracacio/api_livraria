"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const livroSchema = new mongoose_1.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'autores', required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number }
});
const livros = (0, mongoose_1.model)('livros', livroSchema);
exports.default = livros;
