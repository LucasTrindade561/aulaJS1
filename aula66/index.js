function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){ //Metodos sempre fora das tuas funcoes construtoras
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual){ 
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

// p1.desconto(100);
// p1.aumento(100);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15 
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10);

//Aqui criamos o objeto e ja setamos o prototype dele
const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Jordan Vermelho'
    },
    preco: {
        writable: true, 
        configurable: true,
        enumerable: true,
        value:  400
    },
    tamanho: {
        writable: true, 
        configurable: true,
        enumerable: true,
        value: 42
    }
}); 
p3.aumento(10);
console.log(p3);

// //new Object -> Object.prototype
// // Object.getPrototypeOf(obj) = ver qual é o prototype de determinado obj
// const objA = {
//     chaveA: 'Aa'
//     // __proto__:  Object.prototype --> por baixo dos panos
// };

// //objB --> objA --> Object.prototype
// const objB = {
//     chaveB: 'Bb'
//     // __proto__: objA
// };

// const objC = {
//     chaveC: 'Cc'
//     // __proto__: objB
// };

// Object.setPrototypeOf(objB, objA); //Setando o prototype
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveB);