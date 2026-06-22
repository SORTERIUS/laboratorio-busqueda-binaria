const MiniFramework = require('./MiniFramework');

const framework = new MiniFramework();

framework.test(
    "Prueba simple",
    () => {

        if (2 + 2 !== 4) {

            throw new Error("Error matemático");

        }

    }
);

framework.ejecutar();