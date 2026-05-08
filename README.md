# Evaluacion-Practica-Node.js-TypeScript
[![Node.js](https://img.shields.io/badge/Node.js-25.1.0-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Este repositorio contiene la solución a los dos ejercicios planteados en la primera evaluación de la Unidad Curricular de Programación Web.

> **📚 Unidad Curricular**: Programación III  
> **👨‍🎓 Estudiante**: Adrian Romero  
> **Cédula**: 30.300.030

## Proyecto-Node\

### Ejercicio 1\
- Servidor.js
- Vista_inicial.html
- Vista_resultado.html
  
### Ejercicio 2\
- Películas.ts

## 1️⃣ Ejercicio 1: Servidor Node.js con Interceptación

### 🎯 Objetivo
Solicitar el nombre de un animal favorito mediante un formulario HTML, interceptar la petición en el servidor y responder con una segunda vista que muestre dicho nombre.

### 🚀 Ejecución
```bash
cd ejercicio-1
node servidor.js
```

➡️ Abrir en el navegador: http://localhost:3000

🔄 Flujo de Funcionamiento:

- El usuario accede a / y recibe vista_inicio.html con un formulario.
- Al enviar el formulario, se realiza una petición POST /mostrar.
- El servidor intercepta la petición, lee el cuerpo, decodifica el valor del campo animal y reemplaza el marcador {{ANIMAL}} en vista_resultado.html.
- Se devuelve la segunda vista con el nombre insertado.

## 2️⃣ Ejercicio 2: Enumerados en TypeScript

🎯 Objetivo
Definir y mostrar géneros cinematográficos y países de producción utilizando enum en TypeScript, garantizando tipado seguro y código legible.

### 🚀 Ejecución

```bash
cd ejercicio-2
tsc peliculas.ts
node peliculas.js
```
📤 Salida Esperada

🎬 GÉNEROS DE PELÍCULAS:
  • Acción
  • Comedia
  • Drama
  • Terror
  • Ciencia Ficción
  • Documental

🌍 PAÍSES DE PRODUCCIÓN:
  • México
  • Argentina
  • España
  • Colombia
  • Chile
  • Perú
