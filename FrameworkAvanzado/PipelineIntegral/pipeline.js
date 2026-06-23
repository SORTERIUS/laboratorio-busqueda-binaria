const { execSync } = require('child_process');

console.log("\n=================================");
console.log(" PIPELINE INTEGRAL DE TESTING ");
console.log("=================================\n");

try {

    console.log("1. ANALISIS ESTATICO (ESLint)");
    execSync(
        'npx eslint busquedaBinaria.js',
        { stdio: 'inherit' }
    );

    console.log("\n2. PRUEBAS UNITARIAS (Jasmine)");
    execSync(
        'npm test',
        { stdio: 'inherit' }
    );

    console.log("\n3. COBERTURA (NYC)");
    execSync(
        'npm run coverage',
        { stdio: 'inherit' }
    );

    console.log("\n4. PROPERTY TESTING");
    execSync(
        'node FrameworkAvanzado/PropertyTesting/busquedaBinariaProperty.js',
        { stdio: 'inherit' }
    );

    console.log("\n5. CONTRACT TESTING");
    execSync(
        'node FrameworkAvanzado/ContractTesting/demoContract.js',
        { stdio: 'inherit' }
    );

    console.log("\n6. MODELO PREDICTIVO");
    execSync(
        'node FrameworkAvanzado/OrquestacionCombinatoria/modeloPredictivo.js',
        { stdio: 'inherit' }
    );

    console.log("\n7. MUTATION TESTING");
    execSync(
        'npx stryker run',
        { stdio: 'inherit' }
    );

    console.log("\n=================================");
    console.log(" PIPELINE FINALIZADO ");
    console.log("=================================\n");

}
catch(error) {

    console.log("\nERROR EN EL PIPELINE");
    console.log(error.message);

}