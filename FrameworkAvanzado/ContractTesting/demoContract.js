const contratoBusquedaBinaria =
require('./busquedaBinariaContract');

const arreglo = [1,2,3,4,5];

const resultado =
contratoBusquedaBinaria(
    arreglo,
    3
);

console.log(
    "Resultado:",
    resultado
);