import express from "express";
import dataBase from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

dataBase.on("error", console.log.bind(console, "Erro de conexão!"));
dataBase.once("open", () => {
  console.log("Conexão com o banco feita com sucesso.");
});

const app = express();

app.use(express.json());

routes(app);

app.put("/livros/:id", (req, res) => {
  let index = buscalivros(req.params.id);
  res.json(livros[index]);
});


app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req,res) => {
  let index = buscalivros(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscalivros(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso.`);
});

function buscalivros(id) {
  return livros.findIndex(livro => livro.id == id);
}



export default app;
