const a= {
    nome:'Lucas',
    sobrenome: 'Trindade'
};

const c = {...a};
const b = a;
a.nome = 'Camila';
console.log(b, c);
console.log(b, a);



/*let a = [1, 2, 3];
let b =[...a]; //Aqui ele ta copiando realmente o a, ou seja, o b é totalmente independente
//let b = a; //Se conectão dentro da memoria do computador
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b, a);
a.push("Pedro");
console.log(c);*/

/*let a = 'A';
let b = a; //Copia, quando usa valores primitivos
console.log(a,b);

a = 'Outra coisa';
console.log(a, b);*/