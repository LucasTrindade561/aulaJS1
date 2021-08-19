// defineProperty - defineProperties = definir as propriedades do objeto
function Produto(nome, preco, estoque){
   
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // true = mostra a chave, false = nao mostra a chave
        value: estoque,   // value = valor
        writable: true, // writable = definir se o valor pode ou nao ser alterado, false = nao alteravel, true = alteravel
        configurable: true // true = pode reconfigurar a chave ou apagar ela, false = nao pode ser reconfigurado e nao pode apagar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true 
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true 
        }
    });



    // Object.defineProperty(this, 'estoque', { Com o true, essa defineProperty poderia ser executado
    //     enumerable: true, // true = mostra a chave, false = nao mostra a chave
    //     value: estoque,   // value = valor
    //     writable: false, // writable = definir se o valor pode ou nao ser alterado, false = nao alteravel, true = alteravel
    //     configurable: false // true = pode reconfigurar a chave, false = nao pode ser reconfigurado
    // });

}

const p1 = new Produto('Camisa', 20, 3);
// console.log(Object.keys(p1)); // olhar as chaves do objeto
console.log(p1);

// for(let i in p1){
//     console.log(i);
// }

// p1.estoque = 5000;
// // delete p1.estoque; = quando esta com false o configurable ela nao pode ser deletada
// console.log(p1);