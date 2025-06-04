const readline = require('readline-sync')

listanumeros = []

for (let i = 1; i<= 6; i++) {
    let numero= readline.questionInt(`Digite um numero: `)
    listanumeros.push(numero)
}

console.log('\nnúmeros pares.')
const pares = listanumeros.filter(n => n % 2 === 0)
console.log(pares)

console.log('\nnúmeros ímpares.')
const impares = listanumeros.filter(n => n % 2 !== 0)
console.log(impares)
