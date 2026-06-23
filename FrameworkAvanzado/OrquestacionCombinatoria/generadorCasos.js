const factores = {

    tamaño: [
        "vacio",
        "pequeño",
        "mediano",
        "grande"
    ],

    objetivo: [
        "existe",
        "noExiste"
    ],

    tipoDato: [
        "positivo",
        "negativo"
    ]

};

const casos = [];

for (const tamaño of factores.tamaño) {

    for (const objetivo of factores.objetivo) {

        for (const tipoDato of factores.tipoDato) {

            casos.push({

                tamaño,
                objetivo,
                tipoDato

            });

        }

    }

}

console.log(
    "Casos generados:",
    casos.length
);

console.table(casos);