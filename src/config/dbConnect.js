import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://lealvesac:yq7xw@alura.5d2uwba.mongodb.net/alura-node"
);

let dataBase = mongoose.connection;

export default dataBase;