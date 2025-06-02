const a = 5;
const b = 5;

if (a === b) {
    const somar = (a, b) => a + b
    const soma = somar(a, b)
    console.log(`Soma: ${soma}`);
}
else if (a !== b) {
    const multiplicar = (a, b) => a * b;
    const multiplicacao = multiplicar(a, b);
    console.log(`Multiplicação: ${multiplicacao}`)
}
    
 