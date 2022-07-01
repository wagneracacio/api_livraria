"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LivrosController_js_1 = __importDefault(require("../controllers/LivrosController.js"));
const router = (0, express_1.Router)()
    .get("/livros", LivrosController_js_1.default.listarLivros)
    .get("/livros/busca", LivrosController_js_1.default.listarLivroPorEditora)
    .get("/livros/:id", LivrosController_js_1.default.listarLivroPorId)
    .post("/livros", LivrosController_js_1.default.cadastrarLivro)
    .put("/livros/:id", LivrosController_js_1.default.atualizarLivro)
    .delete("/livros/:id", LivrosController_js_1.default.excluirLivro);
exports.default = router;
