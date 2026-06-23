const historial = [

    {
        prueba: "Caso 1",
        ejecuciones: 10,
        fallos: 0
    },

    {
        prueba: "Caso 2",
        ejecuciones: 10,
        fallos: 2
    },

    {
        prueba: "Caso 3",
        ejecuciones: 10,
        fallos: 5
    },

    {
        prueba: "Caso 4",
        ejecuciones: 10,
        fallos: 1
    }

];

const predicciones = historial.map(item => ({

    prueba: item.prueba,

    probabilidadFallo:
        (
            item.fallos /
            item.ejecuciones
        ) * 100

}));

predicciones.sort(

    (a, b) =>
        b.probabilidadFallo -
        a.probabilidadFallo

);

console.table(predicciones);