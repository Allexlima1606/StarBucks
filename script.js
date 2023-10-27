let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")


function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
}

document.getElementById('botao-like').addEventListener('click', function () {
    var contadorElement = document.getElementById('contador');
    var contador = parseInt(contadorElement.innerHTML);
    contadorElement.innerHTML = contador + 1;
});