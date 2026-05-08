const http = require('http');
const fs = require('fs');
const path = require('path');

// Creación del servidor HTTP nativo de Node.js
const servidor = http.createServer((peticion, respuesta) => {
  // ✅ Usamos la API WHATWG URL para analizar la URL de forma segura
  const urlCompleta = new URL(peticion.url, `http://${peticion.headers.host}`);
  const ruta = urlCompleta.pathname;
  const parametros = urlCompleta.searchParams; // Para acceder a query strings si los necesitas

  // VISTA 1: Si la ruta es raíz, sirvo el formulario inicial
  if (ruta === '/' && peticion.method === 'GET') {
    const htmlInicio = fs.readFileSync(path.join(__dirname, 'vista_inicio.html'));
    respuesta.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    respuesta.end(htmlInicio);
    return;
  }

  // INTERCEPTACIÓN: Si la ruta es /mostrar y el método es POST, proceso los datos
  if (ruta === '/mostrar' && peticion.method === 'POST') {
    let cuerpoDatos = '';

    // Acumulo los fragmentos del cuerpo de la petición
    peticion.on('data', (fragmento) => {
      cuerpoDatos += fragmento.toString();
    });

    peticion.on('end', () => {
      // ✅ Extraigo el valor del campo "animal" manualmente
      // Los datos vienen como: "animal=valor"
      const partes = cuerpoDatos.split('=');
      const animalExtraido = partes[1] ? decodeURIComponent(partes[1].replace(/\+/g, ' ')) : '';

      // Leo la segunda vista y reemplazo el marcador {{ANIMAL}}
      let htmlResultado = fs.readFileSync(path.join(__dirname, 'vista_resultado.html'), 'utf-8');
      htmlResultado = htmlResultado.replace('{{ANIMAL}}', animalExtraido);

      // Envío la segunda vista al cliente con el nombre insertado
      respuesta.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      respuesta.end(htmlResultado);
    });
    return;
  }

  // Si la ruta no existe, respondo con error 404
  respuesta.writeHead(404, { 'Content-Type': 'text/plain' });
  respuesta.end('Recurso no encontrado');
});

// Pongo a escuchar el servidor en el puerto 3000
servidor.listen(3000, () => {
  console.log('✅ Servidor activo en http://localhost:3000');
  console.log('✅ Sin advertencias de deprecación - usando API WHATWG URL');
});