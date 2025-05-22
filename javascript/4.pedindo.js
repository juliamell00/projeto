//Digite  no terminal o comando abaixo:
//npm install readline-sync


const readlineSync =  require('readline-sync')

let numero = parseInt(readlineSync.question("Digite um número para tabela: "))

console.log(`Tabela do numero ${numero}: `)

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`)

}
