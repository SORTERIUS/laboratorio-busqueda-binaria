const modulos = [

    {
        nombre: "BusquedaBinaria",
        complejidad: 6,
        defectos: 4,
        frecuenciaUso: 100
    },

    {
        nombre: "PropertyTesting",
        complejidad: 3,
        defectos: 1,
        frecuenciaUso: 60
    },

    {
        nombre: "ContractTesting",
        complejidad: 2,
        defectos: 0,
        frecuenciaUso: 40
    }

];

const resultados = modulos.map(modulo => {

    const componenteLogaritmico =
        Math.log(
            modulo.frecuenciaUso
        );

    const componenteEstocastico =
        Math.random();

    const confiabilidad =

        100

        - (modulo.complejidad * 2)

        - (modulo.defectos * 5)

        + componenteLogaritmico

        + componenteEstocastico;


    const confiabilidadFinal =

        Math.min(
            100,
            confiabilidad
        );

    return {

        modulo: modulo.nombre,

        confiabilidad:
            confiabilidadFinal.toFixed(2)

    };

});

console.table(
    resultados
);