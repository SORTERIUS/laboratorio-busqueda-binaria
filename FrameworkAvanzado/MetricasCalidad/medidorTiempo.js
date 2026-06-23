const { execSync } = require('child_process');

const inicio = Date.now();

execSync(
    'npm test',
    { stdio: 'ignore' }
);

const fin = Date.now();

const tiempo = fin - inicio;

console.log(
    "Tiempo de ejecución:",
    tiempo,
    "ms"
);