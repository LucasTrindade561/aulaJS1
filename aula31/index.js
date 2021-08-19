// //Desestruturação é oq está no lado esquerdo, ou seja, ele ta criando/retribuindo(nesse caso aqui) as variaveis.

// [a, b, c] = ['B', 'C', 'A']; //Reatribuindo
// [agua, buceta, cachorro] = ['B', 'C', 'A']; //Criando
// const numeros = [1, 2, 3];
// [a, b, c] = numeros;
// console.log(a, b, c);

// // ...rest = pegar o resto, ...spread = destrubuir alguma coisa
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiro, segundo, terceiro, , quinto, ...resto] = numeros;
// console.log(primeiro, segundo, terceiro, quinto);
// console.log(resto);

//                   0          1          2
//                0  1  3    0  1  2    0  1  2   
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//const [,[,,seis]] = numeros; //Muito dificil, NADA RECOMENDAVEL
const [list1, list2, list3] = numeros;//Melhor maneira
console.log(list3[2]);




