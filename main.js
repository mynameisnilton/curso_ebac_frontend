const form = document.getElementById('comparar');

// const valorCampoA = parseInt(document.getElementById('campoA'))

function validaCampo() {
    // Obter o valor dos campos A e B
    const valorCampoA = parseInt(document.getElementById('campoA').value);
    const valorCampoB = parseInt(document.getElementById('campoB').value);
    console.log(valorCampoA)
    // Comparar os valores dos campos A e B
    if (valorCampoB > valorCampoA) {
        // Se B for maior que A, exibir mensagem positiva
        alert("Formulário válido. O Campo B é maior que o Campo A.");
        return true; // Permite o envio do formulário
    } else {
        // Se B não for maior que A, exibir mensagem negativa
        alert("Formulário inválido. O Campo B deve ser maior que o Campo A.");
        return false;
    }


}



// console.log(valorCampoA)