/*
Object.values
Object.entries
Object.assign(destino, objeto que quer ser copiado, ... pode botar outros valores aqui tbm)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Ja vimos
Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties(define varias propriedades)
Object.defineProperty(define uma propriedade)
*/

const produto = {nome: 'produto', preco: 1.8};

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}

//Metodos para copiar
// const caneca = {...produto, material: 'porcelana'}; //Copiando o objeto e criando mais uma chave para caneca
// const caneca = Object.assign({}, produto, {meterial: 'porcelana'}); //Outro metodo de copiar
// const caneca = {nome: produto.nome, preco: produto.preco}; //Utilizado quando vc quer apenas recuperar uma propriedade
// caneca.preco = 2.5;
// caneca.nome = 'caneca';
// console.log(caneca);

// Ver as chaves
// console.log(Object.keys(produto));

// congelar o objeto, nao podendo alterar o produto
//Object.freeze(produto);
// produto.nome = 'Outra coisa';
// console.log(produto);

//Retorna as propriedades writable, configurable, value, enurable
// Object.defineProperty(produto, 'nome', {
//     value: 'Camisa',
//     writable: false,
//     configurable: false
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);

//Retornar os valores
// const produto = {nome: 'produto', preco: 1.8};
// console.log(Object.values(produto));

//Retornar tanto os valores, quanto as chaves botado em um array
// const produto = {nome: 'produto', preco: 1.8};
// console.log(Object.entries(produto));

// Interar um objeto usando entries, pois a cade laco ira retornar uma coisa
// const produto = {nome: 'produto', preco: 1.8};
// for(let entry of Object.entries(produto)){
//     console.log(entry);
// }

// Destruing o array usando entries e tirando os dados dentro do array
// const produto = {nome: 'produto', preco: 1.8};
// for(let [chave, valor] of Object.entries(produto)){
//     console.log(chave, valor);
// }