const Spy = require('./Spy');

const spy = new Spy();

spy.ejecutar();
spy.ejecutar();
spy.ejecutar();

console.log(
    "¿Fue llamado?",
    spy.fueLlamado()
);

console.log(
    "Cantidad de llamadas:",
    spy.cantidadLlamadas()
);