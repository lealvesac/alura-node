import livros from "../models/Livro.js";

class LivroController {
  
    static listarLivros = (req, res) => {
    livros.find((erro, livros) => {
      res.status(200).json(livros);
    });
  }
  
}

export default LivroController;
