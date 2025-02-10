function acortarURL() {
    let urlLarga = document.getElementById("urlInput").value;

    if (!urlLarga) {
        alert("Por favor, ingresa una URL válida.");
        return;
    }

    fetch(`https://api.tinyurl.com/create?api_token=AQpBLt795fPQRbm7JG7DfmXW86HJZruONjMhD9ZohF82wSKaepfNja2aT4gE`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: urlLarga })
    })
    .then(response => response.json())
    .then(data => {
        if (data.data) {
            document.getElementById("resultado").innerHTML = `URL corta: <a href="${data.data.tiny_url}" target="_blank">${data.data.tiny_url}</a>`;
        } else {
            document.getElementById("resultado").innerHTML = "Error al acortar la URL.";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("resultado").innerHTML = "Error en la solicitud.";
    });
}
