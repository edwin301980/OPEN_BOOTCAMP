var nombre = null
var apellido = null
var ncompleto = null
var now = null

function sub(){
    nombre =   document.getElementById("nombre1").value;
    apellido =  document.getElementById("apellido1").value;
    alert("Con variable: " + nombre +" "+ apellido)
}

class Ncompleto {
    nombre = "Roberto"
    apellido = "Meza"
    }

function sub1(){
    ncompleto = new Ncompleto()
    sessionStorage.setItem("nombre", ncompleto.nombre+" "+ncompleto.apellido)
    localStorage.setItem("nombre", ncompleto.nombre+" "+ncompleto.apellido)
    now = new Date()
    //document.cookie = `nombre=${JSON.stringify(ncompleto)};expires=${new Date(now.getTime() + 2 * 60000)}`
    document.cookie = `nombre=${ncompleto.nombre+" "+ncompleto.apellido};expires=${new Date(now.getTime() + 2 * 60000)}`
    console.log(`nombre=${JSON.stringify(ncompleto)};expires=${new Date(now.getTime() + 2 * 60000)}`)
    alert("Con Objeto: " + ncompleto.nombre +" "+ ncompleto.apellido)   
}
