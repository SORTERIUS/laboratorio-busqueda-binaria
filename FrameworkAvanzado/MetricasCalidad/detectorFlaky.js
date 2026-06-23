const { execSync } = require('child_process');

let exitos = 0;
let fallos = 0;

for (let i = 0; i < 10; i++) {

    try {

        execSync(
            'npm test',
            { stdio: 'ignore' }
        );

        exitos++;

    } catch {

        fallos++;

    }

}

console.log(
    "Ejecuciones exitosas:",
    exitos
);

console.log(
    "Ejecuciones fallidas:",
    fallos
);

if (fallos === 0) {

    console.log(
        "✓ No se detectaron pruebas inestables"
    );

} else {

    console.log(
        "⚠ Posibles Flaky Tests detectados"
    );

}