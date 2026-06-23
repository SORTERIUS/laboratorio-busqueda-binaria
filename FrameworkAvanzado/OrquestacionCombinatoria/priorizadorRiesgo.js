const casos = [

    { tamaño: "vacio", objetivo: "existe", tipoDato: "positivo" },

    { tamaño: "grande", objetivo: "noExiste", tipoDato: "negativo" },

    { tamaño: "pequeño", objetivo: "existe", tipoDato: "positivo" },

    { tamaño: "mediano", objetivo: "noExiste", tipoDato: "positivo" }

];

function calcularRiesgo(caso) {

    let riesgo = 0;

    if (caso.tamaño === "vacio") {

        riesgo += 5;

    }

    if (caso.objetivo === "noExiste") {

        riesgo += 3;

    }

    if (caso.tipoDato === "negativo") {

        riesgo += 2;

    }

    return riesgo;
}

const priorizados = casos.map(caso => ({

    ...caso,

    riesgo: calcularRiesgo(caso)

}));

priorizados.sort(

    (a, b) => b.riesgo - a.riesgo

);

console.table(priorizados);