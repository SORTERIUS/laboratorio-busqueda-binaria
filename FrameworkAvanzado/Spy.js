class Spy {

    constructor() {

        this.llamadas = 0;

    }

    ejecutar() {

        this.llamadas++;

    }

    fueLlamado() {

        return this.llamadas > 0;

    }

    cantidadLlamadas() {

        return this.llamadas;

    }

}

module.exports = Spy;