const readline = require('readline-sync')

listanumeros = []

for (let i = 1; i<= 3; i++) {
    let nota= readline.questionFloat(`Digite a ${i}ª nota: `)
    listanumeros.push(nota)
}

console.log('\nSoma das notas: ')
soma = listanumeros.reduce((soma, total) => soma + total, 0)
console.log(soma)

console.log('\nQuantidade de notas: ')
quantidade = listanumeros.length
console.log(quantidade)

console.log('\nMédia das notas: ')
media = soma / quantidade
console.log(media)

console.log('\nExibindo todas as notas: ')
listanumeros.forEach((nota, index) => console.log(`${++index}ª nota: ${nota}`))
