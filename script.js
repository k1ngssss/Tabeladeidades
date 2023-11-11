//Função imagens
function imagens() {
    let valor = parseFloat(document.getElementById('valor').value);
    let imagem = '';

//Mudança de imagens
    if  (valor >= 0 && valor <= 2) {
        imagem = "/Imagens/bebé.jpg"
    }
    else if (valor > 2 && valor<12) {
        imagem = "/Imagens/criança.jpg"
    }
    else if (valor >= 12 && valor <= 16) {
        imagem = "/Imagens/adolescente.jpg"
    }
    else if (valor > 16 && valor < 18) {
        imagem = "/Imagens/jovemadulto.jpg"
    }
    else if (valor >= 18 && valor < 50) {
        imagem = "/Imagens/adulto.jpg"
    }
    else if (valor >= 50 && valor <= 65) {
        imagem = "/Imagens/adultomeiaidade.jpg"
    }
    else if (valor > 65 && valor <= 100) {
        imagem = "/Imagens/idoso.jpg"
    }
    else if (valor > 100 && valor <= 130) {
        imagem = "/Imagens/lendário.jpg"
    }
    else if (valor > 130) {
        imagem = "/Imagens/imortal.jpg"
    }

//Verificador de valores
if (isNaN(valor)) {
    alert("Por favor insira uma idade.");
   return;
  }

//Output HTML
document.getElementById('imagem').src = imagem;
}