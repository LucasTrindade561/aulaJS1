const  pessoa = {
  nome:'Lucas',
  sobrenome: 'Trindade',
  idade: 16,
  endereco:{
      rua: 'Jacinto Pinto Piroca',
      numero: 90
  }
};

//Atribuicao via desestruturação
// nome: teste = '' --- mudamos o nome da variavel
// Podemos dar um valor padrao para variavel, caso n tenha no objeto
// const { n , sobrenome, idade} = pessoa;
// const {endereco: {rua: r = 12345, numero}, endereco} = pessoa;

const {nome, ...resto} = pessoa;
console.log(resto, nome);