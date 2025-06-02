const readline = require('readline-sync')

const a = readline.questionFloat('Digite o valor de a: ')
const b = readline.questionFloat('Digite o valor de b: ')
const c = readline.questionFloat('Digite o valor de c: ')

const soma = a + b

if (soma < c) {
    console.log('A soma de a e b é menor que c');
    
}

else if (soma > c) {
    console.log('A soma de a e b é maior que c');
    
}
else {
    console.log('A soma de a e b é igual a c');
}
