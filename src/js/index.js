
// criança valem 0,5
//carne 400gr    p/pessoas + 6 h 650gr
//cerveja 1500 ml por pessoa +6 h 1800
//refrigerante/agua- 1000ml
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = CervejaPP(duracao) * adultos;
    let qdtTotalBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao) / 2 * criancas);

    
    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
    resultado.innerHTML += `<div class="result-block"> <img src="./src/imagens/carne.png">
    <p>${qdtTotalCarne / 1000} kg de carne </p></div>`
    resultado.innerHTML += `<div class="result-block"> <img src="./src/imagens/cerveja.png">
    <p>${Math.ceil(qdtTotalCerveja / 355)} Latas de cerveja </p></div>`
    resultado.innerHTML += `<div class="result-block"> <img src="./src/imagens/refri.png">
    <p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's de 2L de Bebidas </p></div>`
}


function CarnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function CervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function BebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
