function gerartabuada(){
    // pega o valor do input do html
    const numeroinput= document.getElementById('numeroinput')
    let numero=parseInt(numeroinput.value)
    // mostra o resultado onde a tabela deve ser exibida
    const resultadoDiv= document.getElementById('resultadotabuada')
    resultadoDiv.innerHTML=''
    // adiciona um titulo para a tabuada
    resultadoDiv.innerHTML += `<h2> Tabuada do número ${numero}</h2>`
    // Laço de repetição pra gerar a tabuada
    for(let i =1; i<= 10; i++) {
        let resultado= numero * i
        //Adiciona cada linha da tabuada como um parágrafo
        resultadoDiv.innerHTML += `<p>${numero} X ${i} = ${resultado}</p>`

    }
}


// a função gerartabuada será executada quando clicar no botão
const gerarbotao= document.getElementById('gerarbotao')
gerarbotao.addEventListener('click', gerartabuada)

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const darkModeButton = document.getElementById('darkmodebotao');
    if (body.classList.contains('dark-theme')) {
        darkModeButton.textContent = 'Desativar Tema Escuro';
    } else {
        darkModeButton.textContent = 'Ativar Tema Escuro';
    }
}

// A função toggleDarkMode será executada quando clicar no botão
const darkModeButton = document.getElementById('darkmodebotao');
darkModeButton.addEventListener('click', toggleDarkMode);