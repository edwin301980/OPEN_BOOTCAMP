function isTrue() {
    return true
}

async function isPromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)

}

function* idPar() {
    let id = 0
    while(true) {
        id++
        yield id
        console.log(id)
    }
}

