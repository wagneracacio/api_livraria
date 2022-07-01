import express from "express";
import livros from "./LivrosRoutes"
import autores from "./AutoresRoutes"

const routes = (app:express.Application) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })
  app.use(
    express.json(),
    livros,
    autores
  )
}

export default routes