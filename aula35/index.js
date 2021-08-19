// const nomes = ['Lucas Trindade', 'Pedro Dias', 'Fernando Batista'];


//For classico - Geralmente com iteraveis (array ou strings)
//For in - Retorna o indice ou chave (strings, array ou objetos)
//For of - Retorna o valor em si (iteraveis, arrays ou strings)

// for(let i = 0; i < nomes.length; i++){ //Obtem o indice
//     console.log(nomes[i]);
// }

// console.log('###');

// for (let i in nomes){ //Obtem o indice, é bom quando voce quer recuperar o indice para alguma outra situação
//     console.log(nomes[i]);
// }

// console.log('###');

// //for of = não é bom para objeto, pois ele funciona apenas com coisas interaveis, e o objeto não é
// for (let valor of nomes){ //Recupera o valor, não o indice, bom quando tu apenas quer recuperar o valor
//     console.log(valor);
// }

// console.log('###');

// nomes.forEach(function(valor, i, a){ //Recupera o indice, o valor e o array ao mesmo tempo.
//     console.log(valor, i, a);
// });

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Olivesk'
// }
// for (let valor of pessoa){ //Erro
//     console.log(chave, pessoa[chave]);
// }