class MiniFramework {

    constructor() {

        this.tests = [];

    }

    test(nombre, funcion) {

        this.tests.push({
            nombre,
            funcion
        });

    }

    ejecutar() {

        console.log("=== EJECUTANDO TESTS ===");

        this.tests.forEach(test => {

            try {

                test.funcion();

                console.log("✓", test.nombre);

            }

            catch(error) {

                console.log("✗", test.nombre);

                console.log(error.message);

            }

        });

    }

}

module.exports = MiniFramework;