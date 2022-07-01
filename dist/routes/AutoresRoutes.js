"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutoresController_js_1 = __importDefault(require("../controllers/AutoresController.js"));
const router = (0, express_1.Router)()
    .get("/autores", AutoresController_js_1.default.listarAutores)
    .get("/autores/:id", AutoresController_js_1.default.listarAutorPorId)
    .post("/autores", AutoresController_js_1.default.cadastrarAutor)
    .put("/autores/:id", AutoresController_js_1.default.atualizarAutor)
    .delete("/autores/:id", AutoresController_js_1.default.excluirAutor);
exports.default = router;
