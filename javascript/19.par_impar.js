const readline = require('readline-sync')

const numero = parseInt(readline.question('Digite um número: '))


if (numero % 2 === 0) {
    console.log('O número é par.');
} 
else if (numero % 2 !== 0) {
    console.log('O número é ímpar.');
}   