import {Schema, model} from "mongoose"

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

// Me gusta la papaya 
export const Alumno = model("Alumno", AlumnoSchema);