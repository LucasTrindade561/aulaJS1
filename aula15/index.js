//IEEE 754-2008 = padrão de precisão de números do JavaScript

let num1 = 0.7; //number
let num2 = 0.1; //number


/* Resolver problemas com numero preciso e reverter as imprecisões: --- Com JavaScript
// num1 = num1 + num2;
num1 += num2 //0.8
num1 += num2 //0.9
num1 += num2 //1.0

num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1))*/

/*Resolver problemas com numero preciso e reverter as imprecisões: --- Com contas */
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0

console.log(num1);
console.log(Number.isInteger(num1));

/*console.log(num1.toString() + num2); --- mudar temporariamente
num1 = num1.toString(); --- mudar para sempre*/ 

//console.log(num1.toString(2)); --- representação binaria

//console.log(num1.toFixed(2)); --- arredondar o número

//console.log(Number.isInteger(num1)) --- checar se o número é inteiro ou não;
/*let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); --- checar se a conta está invalida ou não*/ 
