import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((erro, livros) => {
      res.status(200).json(livros);
    });
  };

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id, (erro, livros) => {
      if (erro) {
        res.status(400).send({ message: `${erro.message} ID não encontrado.` });
      } else {
        res.status(200).send(livros);
      }
    });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((erro) => {
      if (erro) {
        res
          .status(500)
          .send({ message: `${erro.message} - Falha ao cadastrar o Livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (erro) => {
      if (!erro) {
        res
          .status(200)
          .send({ message: `O livro foi atualizado com sucesso.` });
      } else {
        res.status(500).send({ message: erro.message });
      }
    });
  };

  static excluirLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (erro) => {
      if (!erro) {
        res
          .status(200)
          .send({ message: `O livro do ID ${id}, removido com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: "Livro não encontrado para exclusão." });
      }
    });
  };
}

export default LivroController;
