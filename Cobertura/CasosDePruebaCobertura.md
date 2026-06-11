# Casos de Prueba para Cobertura de Código

## Conjunto Inicial

| Caso | Entrada | Resultado Esperado |
|--------|----------|------------------|
| CP-01 | [1,2,3,4,5], 3 | 2 |
| CP-02 | [1,2,3,4,5], 10 | -1 |
| CP-03 | [1,2,3,4,5], 1 | 0 |
| CP-04 | [1,2,3,4,5], 5 | 4 |

## Conjunto Mejorado

| Caso | Entrada | Resultado Esperado |
|--------|----------|------------------|
| CP-05 | [], 5 | -1 |
| CP-06 | [10], 10 | 0 |
| CP-07 | [10], 5 | -1 |
| CP-08 | [-10,-5,0,5,10], -5 | 1 |
| CP-09 | [1,2,3,4,5,6,7,8,9,10], 8 | 7 |
| CP-10 | null, 5 | -1 |