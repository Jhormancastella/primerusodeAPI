//url de un api//

const catImage = document.getElementById('cat-image');

// Función para mostrar la imagen de gato correspondiente al código de estado HTTP
function showHttpCat(statusCode) {
	const url = `https://http.cat/${statusCode}.jpg`;
	catImage.src = url;
}

