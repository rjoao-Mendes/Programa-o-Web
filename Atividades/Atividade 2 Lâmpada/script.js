function acenderLampada() {
    document.getElementById("lampada").src = "Imagens/acesa.jpg";
    document.getElementById("estado").textContent = "Lâmpada acesa!";
}

function apagarLampada() {
    document.getElementById("lampada").src = "Imagens/apagada.jpg";
    document.getElementById("estado").textContent = "Lâmpada apagada!";
}

document.getElementById("acender").addEventListener("click", acenderLampada);

document.getElementById("apagar").addEventListener("click", apagarLampada);