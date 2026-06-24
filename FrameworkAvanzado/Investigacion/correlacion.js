const tiempo = [6, 12, 18];

const roi = [180, 150, 120];

function correlacion(x, y) {

    const n = x.length;

    const mediaX =
        x.reduce((a, b) => a + b, 0) / n;

    const mediaY =
        y.reduce((a, b) => a + b, 0) / n;

    let numerador = 0;
    let denominadorX = 0;
    let denominadorY = 0;

    for (let i = 0; i < n; i++) {

        numerador +=
            (x[i] - mediaX) *
            (y[i] - mediaY);

        denominadorX +=
            Math.pow(
                x[i] - mediaX,
                2
            );

        denominadorY +=
            Math.pow(
                y[i] - mediaY,
                2
            );
    }

    return numerador /
        Math.sqrt(
            denominadorX *
            denominadorY
        );
}

console.log(
    "Correlacion:",
    correlacion(
        tiempo,
        roi
    ).toFixed(2)
);