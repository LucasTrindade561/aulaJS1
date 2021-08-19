// Reduce -> Mais utilizada para reduzir o array a um unico elemento

//Some todos os numeros (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => { //Acumulador = é o elemento atual que está sendo processado no array.
    console.log(acumulador, valor);
    acumulador += valor;
    return acumulador; 
});

const totalPar = numeros.reduce((acumulador, valor) => { 
    // console.log(acumulador, valor);
    if(valor % 2 === 0) acumulador += valor;
    return acumulador; 
}, 0);// o 0 é o valor inicial do acumulador, pois como queremos recuperar os pares, n podemos deixar vazio esse parametro, pois ele somaria o primeiro valor que é 5, causando erro na conta

const totalImpar = numeros.reduce((acumulador, valor) => {
    // console.log(acumulador, valor);
    if(valor % 2 !== 0) acumulador += valor;
    return acumulador; 
}, 0); 

// console.log(totalImpar);

// Retorne a pessoa mais velha
//o valor muda constantemente
const pessoas = [
    {nome: 'Lucas', idade: 16}, //Acumulador inicia aqui
    {nome: 'Maria', idade: 75}, //Aqui muda o acumulador
    {nome: 'Eduardo', idade: 19},
    {nome: 'Fernanda', idade: 94}, //Aqui muda o acumulador e finalmente acha a pessoa mais velha e muda para o valor final
    {nome: 'Julia', idade: 27},
    {nome: 'Davi', idade: 40},
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    // console.log(acumulador, valor);
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; //Aqui retornamos o valor, pois aqui o valor ja vai estar maior que o acumulador
}, []);
// console.log(maisVelha);










//NAO USAR ESSES DOIS
//Retorne um array com os pares (Filter)
// const totalPares = numeros.reduce((acumulador, valor) => { 
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador; 
// }, []);

//Retorne um array com o dobro dos valores (Map)
// const totalDobro = numeros.reduce((acumulador, valor) => { 
//     acumulador.push(valor * 2);
//     return acumulador; 
// }, []);
// console.log(totalDobro);