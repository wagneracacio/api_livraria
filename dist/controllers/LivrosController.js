"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("../models/Livro"));
class LivroController {
}
exports.default = LivroController;
LivroController.listarLivros = (req, res) => {
    Livro_1.default.find()
        .populate('autor')
        .exec((err, livros) => {
        res.status(200).json(livros);
    });
};
LivroController.listarLivroPorId = (req, res) => {
    const id = req.params.id;
    Livro_1.default.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
        if (err) {
            res.status(400).send({ message: `${err.message} - Id do livro não localizado.` });
        }
        else {
            res.status(200).send(livros);
        }
    });
};
LivroController.cadastrarLivro = (req, res) => {
    let livro = new Livro_1.default(req.body);
    livro.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
        }
        else {
            res.status(201).send(livro.toJSON());
        }
    });
};
LivroController.atualizarLivro = (req, res) => {
    const id = req.params.id;
    Livro_1.default.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: 'Livro atualizado com sucesso' });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
LivroController.excluirLivro = (req, res) => {
    const id = req.params.id;
    Livro_1.default.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: 'Livro removido com sucesso' });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
LivroController.listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora;
    Livro_1.default.find({ 'editora': editora }, {}, (err, livros) => {
        res.status(200).send(livros);
    });
};
