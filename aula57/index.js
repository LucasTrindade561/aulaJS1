// Map -> vai alterar os valores dentro do array, 
// ou seja, ela vai receber um array exatamente do mesmo tamanho que o original
// porem com dados diferentes, independente e
// Aqui vamos retornar o valor com valor difernte, pois aqui nos alteramos o array
//Exemplo:

//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroEmDobro = numeros.map(valor => valor * 2);
// console.log(numeroEmDobro);

//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Lucas', idade: 16},
    {nome: 'Maria', idade: 75},
    {nome: 'Eduardo', idade: 19},
    {nome: 'Fernanda', idade: 94},
    {nome: 'Julia', idade: 27},
    {nome: 'Davi', idade: 40},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade})); //({idade: obj.idade}) = podemos entre parentreses para n acontecer um erro, pois o Vs iria achar que as {} eram da funcao

const comIds = pessoas.map(function(obj, i){
    // obj.id = (i + 1) * 1000; //Aqui esta errado, pois estamos alterando com o array original
    const newObj = {...obj}; //Aqui estamos copiando com o spread
    newObj.id = i; //Aqui estamos botando o id para esse novo obj, .id = cria um obj
    return newObj;
});

console.log(comIds);

//Aqui mostra que o array sempre fica com o mesmo tamanho
// const numeroEmDobro = numeros.map(function(valor){
//     return valor = `0`
// });
// console.log(numeroEmDobro);