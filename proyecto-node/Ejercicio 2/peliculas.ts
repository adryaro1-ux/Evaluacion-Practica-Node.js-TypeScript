// Enumeración para géneros cinematográficos
enum GeneroPelicula {
  Accion = "Acción",
  Comedia = "Comedia",
  Drama = "Drama",
  Terror = "Terror",
  CienciaFiccion = "Ciencia Ficción",
  Documental = "Documental"
}

// Enumeración para países de producción
enum PaisPelicula {
  Mexico = "México",
  Argentina = "Argentina",
  Espana = "España",
  Colombia = "Colombia",
  Chile = "Chile",
  Peru = "Perú"
}

/**
 * Función que recorre los enumerados y los muestra en consola.
 * Utilizo Object.values() para extraer solo los valores legibles,
 * evitando que aparezcan las claves numéricas internas del enum.
 */
function mostrarEnumerados(): void {
  console.log("🎬 GÉNEROS DE PELÍCULAS DISPONIBLES:");
  Object.values(GeneroPelicula).forEach((genero) => {
    console.log(`  • ${genero}`);
  });

  console.log("\n🌍 PAÍSES DE PRODUCCIÓN DISPONIBLES:");
  Object.values(PaisPelicula).forEach((pais) => {
    console.log(`  • ${pais}`);
  });
}

// Ejecuto la función para mostrar los resultados
mostrarEnumerados();