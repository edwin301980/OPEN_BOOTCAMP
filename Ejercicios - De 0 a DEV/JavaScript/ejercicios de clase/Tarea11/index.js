class Estudiante {
    nombre = "Edwin Meza";
    asignatura = ["JavaScript", "HTML", "CSS"];

    obtenDatos(){
        return { nombre: this.nombre,
                 asignatura: this.asignatura
               }
        }
    }

    const estudiante = new Estudiante()
    console.log(estudiante.obtenDatos())
    console.log(estudiante.asignatura[0])
