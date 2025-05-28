const usuarios = [
    {nome: 'João', idade: 30},
    {nome: 'Maria', idade: 35},
    {nome: 'Pedro', idade: 20},
]
console.log('\nExibindo todos elementos do vetor:');
usuarios.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
})
console.log('\nFiltrando usuário.')
const menorQueTrinta = usuarios.filter(usuario => usuario.idade < 30);
menorQueTrinta.forEach(usuario => console.log(('${usuario.nome} tem ${usuario.idade} anos.')))

console.log('\nExibindo apenas o nome dos usuários.')
const nomesUsuarios = usuarios.map(usuario => usuario.nome)
nomesUsuarios.forEach(nome => {
    console.log(`Nome: ${nome}`)
})

console.log('\nExibindo o nome dos usuários com numeração.')
nomesUsuarios.forEach((nome, index) => {
    console.log(`${++index}: ${nome}`)
})

console.log('\n Mostra a soma de todas as idade.')
const somaIdade = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Total: ${somaIdade}`)

//objeto no js é como se fosse classe no python

