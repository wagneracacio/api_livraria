import { Schema, model } from "mongoose";

export interface IAuthor {
  id: string;
  nome: string;
  nacionalidade?: string;
}
const autorSchema = new Schema<IAuthor>(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  {
    versionKey: false,
  }
);

const autores = model<IAuthor>("autores", autorSchema)
export default autores;
