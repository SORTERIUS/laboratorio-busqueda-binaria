const datos = [

    180,
    150,
    120

];

const media =
    datos.reduce(
        (a, b) => a + b,
        0
    ) / datos.length;

const varianza =
    datos.reduce(
        (suma, valor) =>

            suma +
            Math.pow(
                valor - media,
                2
            ),

        0

    ) / datos.length;

console.log(
    "Media ROI:",
    media
);

console.log(
    "Varianza ROI:",
    varianza.toFixed(2)
);