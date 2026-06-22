const busquedaBinaria = require('../../busquedaBinaria');

function contratoBusquedaBinaria(arreglo, objetivo) {

    if (!Array.isArray(arreglo)) {

        throw new Error(
            "Precondición incumplida: debe recibir un arreglo"
        );

    }

    const resultado = busquedaBinaria(
        arreglo,
        objetivo
    );

    if (resultado !== -1) {

        if (arreglo[resultado] !== objetivo) {

            throw new Error(
                "Postcondición incumplida"
            );

        }

    }

    return resultado;
}

module.exports = contratoBusquedaBinaria;