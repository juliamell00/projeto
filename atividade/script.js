function gerarTabuada() {
    const numeroInput = document.getElementById('numeroInput')
    let numero = parseInt(numeroInput.value)

    const resultadoDiv = document.getElementById('resultadoTabuada')
    resultadoDiv.innerHTML = '' // Limpa o conteúdo anterior

    resultadoDiv.innerHTML += `<h2>Tabuada do ${numero}:</h2>`

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

// A função gerarTabuada é chamada quando o botão é clicado
const gerarBotao = document.getElementById('gerarBotao')
gerarBotao.addEventListener('click', gerarTabuada)

function ativarTemaEscuro() {
    const body = document.body;
    body.classList.toggle('tema-escuro');
}

// Adiciona o evento ao botão de tema escuro
const temaEscuroBotao = document.getElementById('temaEscuroBotao');
temaEscuroBotao.addEventListener('click', ativarTemaEscuro);