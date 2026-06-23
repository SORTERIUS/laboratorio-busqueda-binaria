const fs = require('fs');

const codigo =
fs.readFileSync(
    'busquedaBinaria.js',
    'utf8'
);

let complejidad = 1;

const patrones = [
    /if/g,
    /while/g,
    /for/g,
    /case/g,
    /\?/g,
    /&&/g,
    /\|\|/g
];

patrones.forEach(patron => {

    const encontrados =
        codigo.match(patron);

    if (encontrados) {

        complejidad +=
            encontrados.length;

    }

});

console.log(
    "Complejidad ciclomática:",
    complejidad
);