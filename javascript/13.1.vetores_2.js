//Criando um vetor
const listanumeros = [1, 2, 3, 4, 5]

console.log('Listando vetores da lista')
console.log(listanumeros)

console.log('\nMultiplicando os valores do vetor por 2')
const dobrados = listanumeros.map(n => n * 2)
console.log(dobrados)

console.log('\n Filtrando elementos pares')
const pares = listanumeros.filter(n => n % 2 === 0)
console.log(pares)

console.log('\nSomndo todos os numeros da lista')
const soma = listanumeros.reduce((soma, total) => soma + total, 0)
console.log(soma)

