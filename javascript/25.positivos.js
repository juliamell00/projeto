const readline = require('readline-sync')

listanumeros = []

for (let i = 1; i<= 5; i++) {
    let numero= readline.questionInt(`Digite um numero: `)
    listanumeros.push(numero)
}

console.log('\nnúmeros negativos.')
const negativos = listanumeros.filter(n => n < 0)
console.log(negativos)
console.log('\nnúmeros positivos.')
const positivos = listanumeros.filter(n => n > 0)
console.log(positivos)