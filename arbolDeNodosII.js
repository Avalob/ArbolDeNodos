document.addEventListener("DOMContentLoaded", function () {
    // Obtener el contenedor
    const app = document.getElementById("contenedor");

    // Crear título
    const titulo = document.createElement("h2");
    titulo.textContent = "¿Dónde quieres viajar?";

    // Crear imagen
    const imagen = document.createElement("img");
    imagen.src = "https://www.oneair.es/wp-content/uploads/2023/03/10-cuirosidades-sobre-viajar-en-avion.jpg";
    imagen.alt = "Imagen de avión";

    // Crear select
    const select = document.createElement("select");

    // Lista de destinos con imágenes
    const destinos = {
        "España": "https://eldinero.com.do/wp-content/uploads/madridweb.jpg",
        "Francia": "https://www.paises.net/wp-content/uploads/2022/11/francia-pais.jpg",
        "Italia": "https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/09/25/5fa44bab847b2.jpeg",
        "Alemania": "https://cypes.grupoeurohispana.com/img/articulos_facebook/ALEMANIA.jpg",
        "Portugal": "https://www.travelzoo.com/images/tzoo.20775.0.831085.Porto.jpg"
    };

    // Crear un elemento p para mostrar el país seleccionado
    const textoPais = document.createElement("p");
    textoPais.textContent = "";

    // Añadir opción por defecto al select
    const opcionDefault = document.createElement("option");
    opcionDefault.textContent = "Selecciona un destino";
    opcionDefault.disabled = true;
    opcionDefault.selected = true;
    select.appendChild(opcionDefault);

    // Añadir opciones de países al select
    for (let pais in destinos) {
        let opcion = document.createElement("option");
        opcion.value = destinos[pais];
        opcion.textContent = pais;
        select.appendChild(opcion);
    }

    // Evento para cambiar la imagen y mostrar el país seleccionado
    select.addEventListener("change", function () {
        // Cambiar la imagen según el destino seleccionado
        imagen.src = this.value;

        // Actualizar el texto con el país seleccionado
        const paisSeleccionado = select.options[select.selectedIndex].text;
        textoPais.textContent = "Su destino es " + paisSeleccionado;
    });

    // Añadir elementos al contenedor
    app.appendChild(titulo);
    app.appendChild(imagen);
    app.appendChild(textoPais); 
    app.appendChild(select);
});

