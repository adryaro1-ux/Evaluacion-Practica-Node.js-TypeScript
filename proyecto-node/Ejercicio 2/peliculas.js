"use strict";
// Enumeración para géneros cinematográficos
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["Comedia"] = "Comedia";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["Terror"] = "Terror";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Documental"] = "Documental";
})(GeneroPelicula || (GeneroPelicula = {}));
// Enumeración para países de producción
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["Mexico"] = "M\u00E9xico";
    PaisPelicula["Argentina"] = "Argentina";
    PaisPelicula["Espana"] = "Espa\u00F1a";
    PaisPelicula["Colombia"] = "Colombia";
    PaisPelicula["Chile"] = "Chile";
    PaisPelicula["Peru"] = "Per\u00FA";
})(PaisPelicula || (PaisPelicula = {}));
/**
 * Función que recorre los enumerados y los muestra en consola.
 * Utilizo Object.values() para extraer solo los valores legibles,
 * evitando que aparezcan las claves numéricas internas del enum.
 */
function mostrarEnumerados() {
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
