//Filter = filtra o array  -> Sempre retorna um novo array com a mesma quantidade de elementos ou menos do array original. 
// Essa metodo interage como se fosse um for
// Esse metodo, recebe o valor, o indice (Usado quando queremos que apenas num x  indice faca algo, por exemplo) e o proprio array a cada interacao
// O metodo filter(), tem que receber um boolean
// Esse metodo tem que receber uma funcao callback para interar por cada elemento dentro do array

//Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Aqui o filter ja esta recebendo, pois quando se retorna a propria condicao, ou vai ser true ou vai ser false
//valor => valor > 10 = funcao callback
const numerosFiltrados = numeros.filter(valor => valor > 10); 
// console.log(numerosFiltrados);



// Retorne as pessoas q tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Lucas', idade: 16},
    {nome: 'Maria', idade: 75},
    {nome: 'Eduardo', idade: 19},
    {nome: 'Fernanda', idade: 94},
    {nome: 'Julia', idade: 27},
    {nome: 'Davi', idade: 40},
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

// console.log(pessoasNomeGrande);
// console.log(pessoasMaisVelhas);
console.log(nomeTerminaComA);
