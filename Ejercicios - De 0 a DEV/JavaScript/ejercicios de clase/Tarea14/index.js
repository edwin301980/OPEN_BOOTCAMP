//var btn0 = document.getElementById("btn0")
let btn0 = document.querySelector("#btn0")
let h1 = document.querySelector("h1")

btn0.addEventListener("click", () => {
    //alert("Se ha hecho click")
    //confirm("Estas de acuerdo") && console.log("ok")
    const btnbol = confirm("Estas de acuerdo") 
    if (btnbol) {
        console.log("OK")
    } else {
        console.log("Cancel")
    }
        
})

$(() => {
    $("#btn0").click(() =>{
        console.log("Hola, estoy utilizando jQuery")
        h1.addEventListener("cambiartexto", eventual => {
           h1.innerText = eventual.detail.texto 
        })
    })
})

function cambiartexto(nuevotexto){
    const eventual = new CustomEvent("cambiartexto", {
        detail:{
        texto: nuevotexto
        }
    })
    
    h1.dispatchEvent(eventual)
}