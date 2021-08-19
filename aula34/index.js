// For in = le os indices ou chaves do objeto

// const frutas = ['Maça', 'Laranja', 'Banana', 'Uva', 'Pera'];
const pessoa = {
    nome: 'Luana',
    sobronome: 'Almeida',
    idade: 18
};

// const chave = 'nome';

// // // console.log(pessoa.nome);
// // console.log(pessoa[chave]);

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// for (let indice in frutas){
//     console.log(frutas[indice]);
// }
