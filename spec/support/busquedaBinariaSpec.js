const busquedaBinaria = require('../../busquedaBinaria');

describe('Pruebas de búsqueda binaria', () => {

    it('Debe encontrar un elemento existente', () => {

        const arreglo = [1, 2, 3, 4, 5];

        expect(busquedaBinaria(arreglo, 3)).toBe(2);

    });

    it('Debe retornar -1 si el elemento no existe', () => {

        const arreglo = [1, 2, 3, 4, 5];

        expect(busquedaBinaria(arreglo, 10)).toBe(-1);

    });

    it('Debe encontrar el primer elemento', () => {

        const arreglo = [1, 2, 3, 4, 5];

        expect(busquedaBinaria(arreglo, 1)).toBe(0);

    });

    it('Debe encontrar el último elemento', () => {

        const arreglo = [1, 2, 3, 4, 5];

        expect(busquedaBinaria(arreglo, 5)).toBe(4);

    });

});