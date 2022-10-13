import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brunasousa:1234@estudos.oeamz3d.mongodb.net/biblioteca");

let db = mongoose.connection;

export default db;