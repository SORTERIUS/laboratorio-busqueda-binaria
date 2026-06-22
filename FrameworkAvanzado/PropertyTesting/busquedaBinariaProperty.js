const fc = require('fast-check');

const busquedaBinaria = require('../../busquedaBinaria');

fc.assert(

    fc.property(

        fc.array(fc.integer(), { minLength: 1 }),

        (arreglo) => {

            const ordenado = [...arreglo].sort((a, b) => a - b);

            const objetivo = ordenado[0];

            const resultado = busquedaBinaria(
                ordenado,
                objetivo
            );

            if (resultado === -1) {

                return false;

            }

            return ordenado[resultado] === objetivo;

        }

    )

);

console.log(
    "✓ Property-Based Testing completado"
);