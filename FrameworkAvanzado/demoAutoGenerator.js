const AutoTestGenerator = require('./AutoTestGenerator');

const generador = new AutoTestGenerator();

generador.generar(100);

generador.generar("Hola");

generador.generar(true);

generador.generar([1,2,3]);