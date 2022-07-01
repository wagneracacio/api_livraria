"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LivrosRoutes_1 = __importDefault(require("./LivrosRoutes"));
const AutoresRoutes_1 = __importDefault(require("./AutoresRoutes"));
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Curso de node" });
    });
    app.use(express_1.default.json(), LivrosRoutes_1.default, AutoresRoutes_1.default);
};
exports.default = routes;
