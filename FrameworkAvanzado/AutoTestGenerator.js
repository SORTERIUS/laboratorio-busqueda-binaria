class AutoTestGenerator {

    generar(valor) {

        const tipo = typeof valor;

        console.log("Generando prueba para:", tipo);

        switch(tipo) {

            case "number":

                console.log("✓ Verificar operaciones matemáticas");
                break;

            case "string":

                console.log("✓ Verificar longitud de texto");
                break;

            case "boolean":

                console.log("✓ Verificar valores booleanos");
                break;

            default:

                if (Array.isArray(valor)) {

                    console.log("✓ Verificar tamaño del arreglo");

                } else {

                    console.log("✓ Tipo no soportado");

                }

        }

    }

}

module.exports = AutoTestGenerator;