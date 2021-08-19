// classe é a mesma coisa que uma funcao construtora.
class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Ja adiciona direto no prototype
    falar(){
        console.log(`${this.nome} esta falando.`);
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando.`);
}

//Instanciar = criar um onjeto a partir da classe
const p1 = new Pessoa('Lucas','Trindade');
const p2 = new Pessoa2('Camila', 'Trindade');
p1.falar();
p2.falar();
// console.log(p1, p2);