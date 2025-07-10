// Importamos todas las dependencias necesarias - ISAAC REYES
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { test } from './backend/controlador/alumnos.controlador.js';

//Configuracion de la libreria dotenv - ISAAC REYES
dotenv.config();
//Conexion a Mongoose - ISAAC REYES
mongoose.connect(process.env.urlbd)
//Si conecta manda este mensaje
.then(() => {
    console.log("Connected to MongoDB");
} )
//Si no conecta manda este mensaje - ISAAC REYES
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const app = express();
//Seguridad - ISAAC REYES
app.use(cors()); 
app.listen(4000, () => {
    console.log("ESCUCHANDO AL SERVIDOR EN EL PUERTO 4000");
});

// Funcion de prueba del controlador - ISAAC REYES
test(); 