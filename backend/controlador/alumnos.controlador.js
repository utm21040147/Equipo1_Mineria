import { Alumno } from '../modelo/alumnos.modelo.js';

// Crear 5 alumnos en la base de datos
Alumno.create([
    { nombre: "Carlos", calificacion: 9 },
    { nombre: "Ana", calificacion: 8 },
    { nombre: "Luis", calificacion: 7 },
    { nombre: "María", calificacion: 10 },
    { nombre: "José", calificacion: 6 }
])
.then(() => {
    console.log("Alumnos creados exitosamente");
})
.catch((error) => {
    console.error("Error al crear los alumnos:", error);
});

// Función de prueba del controlador
export const test = () => {
    console.log("Controlador de alumnos activo");
};
