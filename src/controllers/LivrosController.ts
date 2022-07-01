import livros from "../models/Livro";
import { Request, Response} from "express";
import { CallbackError } from "mongoose";

export default class LivroController {

  static listarLivros = (req: Request, res:Response) => {
    livros.find()
      .populate('autor')
      .exec((err, livros) => {
        res.status(200).json(livros)
  })
  }

  static listarLivroPorId = (req: Request, res: Response) => {
    const id = req.params.id;

    livros.findById(id)
      .populate('autor', 'nome')
      .exec((err, livros) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      } else {
        res.status(200).send(livros);
      }
    })
  }

  static cadastrarLivro = (req: Request, res: Response) => {
    let livro = new livros(req.body);

    livro.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarLivro = (req: Request, res: Response) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err:CallbackError) => {
      if(!err) {
        res.status(200).send({message: 'Livro atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirLivro = (req: Request, res: Response) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err:CallbackError) => {
      if(!err){
        res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarLivroPorEditora = (req: Request, res: Response) => {
    const editora = req.query.editora

    livros.find({'editora': editora}, {}, (err, livros) => {
      res.status(200).send(livros);

    })
  }
}