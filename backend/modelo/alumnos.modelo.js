//Importamos las dependencias necesarias
import {Schema, model} from "mongoose"


// Creacion del esquema para el modelo Alumno (BD con sus atributos)
const AlumnoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    calificacion: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    }
});

// Exportamos el modelo Alumno
export const Alumno = model("Alumno", AlumnoSchema);