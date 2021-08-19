function Pessoa(nome, sobrenome){ //Constructor function
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Nao recomendavel
    // Object.freeze(this); //Aqui estamos dizendo que nao queremos mudar o objeto de jeito nenhum, ou seja, ele n podera ser

}

// {} <- this -> this
// new = cria um novo objeto e liga a palavra this a esse objeto
// fazendo que o this mude para cada objeto criado, pois ele é um molde
//p1 = (endereco de memoria) -> 'valor'
//p1.endereco = 'Lucas' --> pode
//p1 = novo endereco de memoria --> nao pode, ERRO 
// p1 = 'Outra coisa' --> ERRO
// p1.nome = 'Outra coisa'; --> PODe

const p1 = new Pessoa('Lucas', 'Trindade'); 
const p2 = new Pessoa('Cristiano', 'Rafael');
console.log(p1);

// Object.freeze(p1); //Aqui estamos dizendo que nao queremos mudar o objeto de jeito nenhum, ou seja, ele n podera ser

// function criaPessoa(nome, sobrenome){ FACTORY FACTION
//     return {
//         nome, 
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome} `
//         }
//     };
// }

// const p1 = criaPessoa('Lucas', 'Trindade');
// console.log(p1.nomeCompleto);

// const pessoa1 = new Object();
// pessoa1.nome = 'Lucas';
// pessoa1.sobrenome = 'Trindade';
// pessoa1.idade = 21;
// pessoa1.falarNome = function(){
//     return `${this.nome} esta falando seu nome.`;
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessoa1){
//     console.log(pessoa1[chave]);
// };

// console.log(pessoa1.getDataNascimento());

// pessoa1.falarNome();

// delete pessoa1.nome;
// console.log(pessoa1);

// const pessoas = {
//     nome: 'Lucas', //chave nome
//     sobrenome: 'Trindade' //chave sobrenome    
// };


// //Jeito quando for mais dinamico
// const chave = 'nome';
// console.log(pessoas['nome']);//Usamos esse jeito aqui, pois podemos botar um valor mais dinamico dentro do []
// console.log(pessoas[chave]); 

// //Jeito quando for mais simples para conseguir acessar o objeto
// console.log(pessoas.nome);
// console.log(pessoas.sobrenome);
