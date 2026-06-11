function busquedaBinaria(arreglo, objetivo) {

    // ANOMALÍA 1
    let variableInutil = 100;

    // ANOMALÍA 2
    let temporal = 0;
    temporal = 50;

    if (!Array.isArray(arreglo)) {
        return -1;
    }

    if (arreglo.length === 0) {
        return -1;
    }

    let izquierda = 0;
    let derecha = arreglo.length - 1;

    while (izquierda <= derecha) {

        let medio = Math.floor((izquierda + derecha) / 2);

        if (arreglo[medio] === objetivo) {
            return medio;
        }

        if (arreglo[medio] < objetivo) {
            izquierda = medio + 1;
        } else {
            derecha = medio - 1;
        }
    }

    return -1;
}

module.exports = busquedaBinaria;