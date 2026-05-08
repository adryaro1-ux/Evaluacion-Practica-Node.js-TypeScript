# Evaluacion-Practica-Node.js-TypeScript
Este repositorio contiene la solución a los dos ejercicios planteados en la primera evaluación de la Unidad Curricular de Programación Web.

📂 proyecto-node
 ┣ 📂 ejercicio-1
 ┃ ┣ 📄 servidor.js              # Lógica del servidor HTTP
 ┃ ┣ 📄 vista_inicio.html        # Formulario de entrada (Vista 1)
 ┃ ┗ 📄 vista_resultado.html     # Página de resultado (Vista 2)
 ┗ 📂 ejercicio-2
   ┣ 📄 peliculas.ts             # Enums y función de visualización
   ┗ 📄 peliculas.js             # [Generado] Código compilado

# 1. Ejercicio 1: 
Implementación de un servidor HTTP nativo en Node.js que intercepta peticiones POST, procesa datos de un formulario y sirve dos vistas HTML diferenciadas.

# 2. Ejercicio 2: 
Uso de TypeScript para definir enumerados (enum) de géneros cinematográficos y países de producción, mostrando su contenido en consola con tipado seguro.

# Ejercicio 1: Servidor Node.js con Interceptación

🎯 Objetivo: Solicitar el nombre de un animal favorito mediante formulario HTML, interceptar la petición en el servidor y responder con una segunda vista que muestre dicho nombre.

⚙️ Funcionamiento

┌─────────────────┐     GET /     ┌──────────────────┐
│   Navegador     │ ───────────►  │   servidor.js    │
│                 │               │                  │
│                 │ ◄───────────  │ Sirve:           │
│                 │   HTML Form   │ vista_inicio.html│
└─────────────────┘               └──────────────────┘
         │
         │ POST /mostrar
         │ body: animal=Perro
         ▼
┌───────────────────────┐
│   servidor.js         │
│                       │
│ • Intercepta POST     │
│ • Decodifica datos    │
│ • Reemplaza {{ANIMAL}}│
│ • Responde HTML       │
└───────────────────────┘
         │
         │ HTML con resultado
         ▼
┌───────────────────┐
│   Navegador       │
│ Muestra:          │
│"Tu animal favorito│
│  es: Perro"       │
└───────────────────┘

▶️ Ejecución

# Navegar a la carpeta del ejercicio 1
```bash
cd ejercicio-1-node

# Iniciar el servidor
```bash
node servidor.js

# ✅ Deberías ver:
# ✅ Servidor activo en http://localhost:3000
