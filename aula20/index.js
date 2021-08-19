const pessoa1 = { //Um objeto
    nome: 'Lucas',
    sobrenome: 'Trindade',
    idade: 17,

    fala(){ //Metodo é uma funcão dentro de um objeto
        console.log(`A minha idade atual é ${this.idade}`); //this = pega os valores dentro do objeto para conseguir usar no metodo
    },
    incrementaIdade(){
        this.idade++; //This = o objeto em si
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*function criaPessoa(nome, sobrenome, idade){ //Esse to de função se chama factory, pois ela direcionada para criar objetos
    return{ nome, sobrenome,  idade }; // oq ta dentro desse return é um objeto
};

const pessoa1 = criaPessoa('Lucas', 'Trindade', 16); //Oq ta dentro do parenteses se chama argumentos que é basicamente os valores que os paremetros vao receber
const pessoa2 = criaPessoa('Pedro', 'Oliveira', 17);
const pessoa3 = criaPessoa('Augusto', 'Batista', 18);
console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);*/