import express from "express";
import dataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

dataBase.on("error", console.log.bind(console, "Erro de conexão!"));
dataBase.once("open", () => {
  console.log("Conexão com o banco feita com sucesso.");
});

const app = express();

app.use(express.json());

routes(app);

export default app;
