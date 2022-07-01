"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Autor_1 = __importDefault(require("../models/Autor"));
class AutorController {
}
exports.default = AutorController;
AutorController.listarAutores = (req, res) => {
    Autor_1.default.find((err, autores) => {
        res.status(200).json(autores);
    });
};
AutorController.listarAutorPorId = (req, res) => {
    const id = req.params.id;
    Autor_1.default.findById(id, (err, autores) => {
        if (err) {
            res.status(400).send({ message: `${err.message} - Id do Autor não localizado.` });
        }
        else {
            res.status(200).send(autores);
        }
    });
};
AutorController.cadastrarAutor = (req, res) => {
    let autor = new Autor_1.default(req.body);
    autor.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar Autor.` });
        }
        else {
            res.status(201).send(autor.toJSON());
        }
    });
};
AutorController.atualizarAutor = (req, res) => {
    const id = req.params.id;
    Autor_1.default.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: 'Autor atualizado com sucesso' });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
AutorController.excluirAutor = (req, res) => {
    const id = req.params.id;
    Autor_1.default.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: 'Autor removido com sucesso' });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
