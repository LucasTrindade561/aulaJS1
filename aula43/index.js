//No js podemos ou não usar os paremetros, caso se mande um argumento e não use parametros, n vai gerar um erro// 
// arguments = argumentos que sustenta todos os argumentos enviados 
// function funcao(){ 
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao( 1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b, c, d, e, f){ 
//     console.log(a, b, c, d, e, f);
// }
//funcao( 1, 2, 3);

// function funcao(a, b = 1, c = 7){ //Setando valor padrao para o b
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);//Usamos undefined para que o numero assuma o valor padrao, caso queriamos usar outro nuemro apos o dele.

// function funcao({nome, sobrenome, idade}){ --- Com objeto
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'Lucas', sobrenome: 'Trindade', idade: 16}
// funcao(obj);

// function funcao([valor1,valor2, valor3]){ --- Com array
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Lucas', 'Trindade', 16]);

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+', 1, 20, 30, 50);

const conta2 = function (operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta2('*', 1, 20, 30, 50);

const conta3 = (operador, acumulador, ...numeros) =>{ //Nao tem arguments, apenas essa aqui nao tem arguments
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta3('/', 1, 20, 30, 50);

const conta4 = (...args) =>{ //Com o rest, podemos usar como se fosse o arguments e tu pode usar em qualquer tipo de funcao
    console.log(args[2]);
    }
conta4('/', 1, 20, 30, 50);