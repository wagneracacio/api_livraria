import express from "express";
import livros from "./LivrosRoutes.js"
import autores from "./AutoresRoutes.js"

const routes = (app) => {
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