const falar = {
    falar(){
        console.log(`${this.nome} esta falando.`);
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} esta comendo.`);
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo.`);
    }
}

// Com isso esses metodos nao estarao acoplados com cada objeto que criar
// Estamos copiando os objetos para que nao fiquem todos acoplados como classe mae ou pai e nao tendo hierarquia
// const pessoaPrototype = {...falar, ...beber, ...comer}; 
const pessoaPrototype = Object.assign({}, beber, falar, comer);

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, { //.create = recebe o prototype, e dps os valores, desse jeito
        nome: {
            value: nome, 
            enumerable: true, 
            writable:true, 
            configurable:true},
        sobrenome: {
            value: sobrenome, 
            enumerable: true, 
            writable:true, 
            configurable:true}
    });
}

const p1 = criaPessoa('Lucas', 'Trindade');
const p2 = criaPessoa('Rafaela', 'Trindade');
p1.beber();
p2.falar();
