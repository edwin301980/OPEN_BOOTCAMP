const ind = require('./logger');

const myfunction = val => {
    if (typeof val === "number" ) {
        console.log(typeof val === "number")
        return val * 2
    }
    throw new Error("Errorrrrrrr")
}

const numero = "8";

try {
    console.log("Está ejecutándose de manera correcta")
    const doble = myfunction(numero)
    console.log(doble)
} catch (e) {
    console.error(`${e}`)
} finally {
    console.log("Finally")
}

