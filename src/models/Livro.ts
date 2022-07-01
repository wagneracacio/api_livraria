import { Schema, model } from "mongoose";
import { IAuthor } from "./Autor.js";

export interface ILivro {
  id: string
  titulo: string
  autor: IAuthor
  editora: String
  numeroPaginas?: Number
}
const livroSchema = new Schema<ILivro>(
  {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
  }
)

const livros = model<ILivro>('livros', livroSchema);
export default livros