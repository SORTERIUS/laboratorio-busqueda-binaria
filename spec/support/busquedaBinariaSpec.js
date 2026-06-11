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

    it('Debe retornar -1 en arreglo vacío', () => {

        const arreglo = [];

        expect(busquedaBinaria(arreglo, 5)).toBe(-1);

    });

    it('Debe encontrar elemento único', () => {

        const arreglo = [10];

        expect(busquedaBinaria(arreglo, 10)).toBe(0);

    });

    it('Debe retornar -1 si el único elemento no coincide', () => {

        const arreglo = [10];

        expect(busquedaBinaria(arreglo, 5)).toBe(-1);

    });

    it('Debe encontrar números negativos', () => {

        const arreglo = [-10, -5, 0, 5, 10];

        expect(busquedaBinaria(arreglo, -5)).toBe(1);

    });

    it('Debe encontrar elemento en lista grande', () => {

        const arreglo = [1,2,3,4,5,6,7,8,9,10];

        expect(busquedaBinaria(arreglo, 8)).toBe(7);

    });

    it('Debe retornar -1 si no recibe un arreglo válido', () => {

     expect(busquedaBinaria(null, 5)).toBe(-1);

     });

});