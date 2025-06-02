const readline = require('readline-sync')

const numero = readline.questionInt('Digite o número: ')

if (numero < 0) {
    console.log('O número é negativo.')
}
else if (numero > 0) {
    console.log('O número é positivo.')
}