const nombre = "Edwin"
const apellido = 'Meza'
const estudiante = nombre.concat(` `).concat(apellido)

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

const estudianteLength = estudiante.length


const inicialNombre = nombre.substring(0, 1)

const finalApellido = apellido.substring(apellido.length - 1, apellido.length)

const estudianteSinEspacios = estudiante.replace(/ /g, '')

const nombreEnEstudiante = estudiante.includes(nombre)