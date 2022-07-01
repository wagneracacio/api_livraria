import autores, { IAuthor } from "../models/Autor";
import { Request, Response } from "express";
import { CallbackError } from "mongoose";

export default class AutorController {

  static listarAutores = (req: Request, res: Response) => {
    autores.find((err, autores) => {
      res.status(200).json(autores)
  })
  }

  static listarAutorPorId = (req: Request, res: Response) => {
    const id = req.params.id;

    autores.findById(id, (err:CallbackError, autores:IAuthor) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Autor não localizado.`})
      } else {
        res.status(200).send(autores);
      }
    })
  }

  static cadastrarAutor = (req: Request, res: Response) => {
    let autor = new autores(req.body);

    autor.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarAutor = (req: Request, res: Response) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, {$set: req.body}, (err:CallbackError) => {
      if(!err) {
        res.status(200).send({message: 'Autor atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirAutor = (req: Request, res: Response) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err: CallbackError) => {
      if(!err){
        res.status(200).send({message: 'Autor removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}