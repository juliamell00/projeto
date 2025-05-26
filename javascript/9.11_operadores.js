// Operadores lógicos

let nome1 = 'João'
let nome2 = 'João'

let idade1 = 20
let idade2 = '20'

console.log('Igual') // true, compara o valor
console.log(nome1 === nome2) 
console.log(idade1 == idade2) 
console.log(idade1 === idade2) 

console.log('Diferente') // false, compara o valor
console.log(nome1 !== nome2)
console.log(idade1 != idade2)

console.log('AND') // true, compara o valor e o tipo
console.log(1 < 2 && 1 < 3)
console.log(10 < 2 && 1 < 3)


console.log('OR') // true, compara o valor e o tipo
console.log(10 < 2 || 1 < 3)