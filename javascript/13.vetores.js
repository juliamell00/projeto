// Criando um vetor
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

console.log('Exibindo todos os elementos dentro do vetor.')
console.log(frutas);

console.log(('Exibindo apenas um elemento dentro do vetor.'))
console.log(frutas[0])
console.log(frutas[2])

console.log('Adicionando elementos ao vetor.')
frutas.push('Uvas');
console.log(frutas)

console.log('Removendo o último elemento do vetor.')
frutas.pop(); 
console.log(frutas)

console.log('Removendo o primeiro elemento do vetor.')
frutas.shift();
console.log(frutas)

console.log('Percorrendo o vetor.')
frutas.forEach((fruta, index) => {
    console.log(`${++index}: ${fruta}`)
})

// ++ acrescimo, na frente do index, para começar a contagem em 1

//for (let i = 1; i <= 5; i++){
   // console.log(i)
//}