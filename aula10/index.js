//String, number, underfined, null, boolean, symbol

const nome = 'Lucas';
const nome1= "Lucas"; //String
const nome2 = `Lucas`;

const n1 = 10; //Number
const n2 = 10.29;

let nomeAluno; //underfined = indefinido, não aponta para local nenhum na memória --- usado quando não defenimos uma variavel e queremos que a propria linguagem defina o valor
nomeAluno = 1; // Aqui definiu o valor, num futuro
const sobrenomeAluno = null; //Nulo = valor nulo -- não aponta para local nenhum na memória --- usado quando queremos mesmo usar um valor nulo

const aprovado = true; // Boolean = Duas possibilidades de valores = true/false (lógico) --- usado para mudar o fluxo da aplicação


let a = 2;
let b = a;

console.log(a, b);

a = 3;

console.log(a, b);