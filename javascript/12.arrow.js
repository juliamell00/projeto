//Arrow function
const somar = (a, b) => {
    return a + b;
}
 
//arrow function
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

//chamando uma função
const soma = somar(5, 3);
const subtracao = subtrair(5, 3);
const multiplicacao = multiplicar(5, 3);
const divisao = dividir(5, 3);
//mostra o conteúdo da constante
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);


