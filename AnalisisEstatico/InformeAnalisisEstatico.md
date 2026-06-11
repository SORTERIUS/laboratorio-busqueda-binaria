# Análisis Estático del Código

## Herramienta utilizada

ESLint

## Descripción

ESLint es una herramienta de análisis estático para JavaScript que permite detectar errores potenciales, malas prácticas de programación, variables no utilizadas y problemas de calidad del código sin necesidad de ejecutar la aplicación.

## Tipos de análisis proporcionados

- Detección de variables no utilizadas.
- Identificación de código muerto.
- Verificación de sintaxis.
- Detección de errores potenciales.
- Aplicación de estándares de calidad.

## Anomalías introducidas

### Anomalía 1

Variable declarada y nunca utilizada:

```javascript
let variableInutil = 100;