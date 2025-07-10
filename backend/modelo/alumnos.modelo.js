//Importamos las dependencias necesarias - ISAAC REYES
import {Schema, model} from "mongoose"


// Creacion del esquema para el modelo Alumno (BD con sus atributos) - ISAAC REYES
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

// Exportamos el modelo Alumno - ISAAC REYES
export const Alumno = model("Alumno", AlumnoSchema);