const _velocidade = Symbol('velocidade'); // Pode ser utilizado para criar uma chave privada dentro do seu objeto, pois ele cria um novo id a cada vez, que é chamado 
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }   

    set velocidade(valor){
        console.log('Setter');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('Getter');        
        return this[_velocidade];
    }

    acelerar(){
        if( this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Bmw');

// for(let i = 0; i <= 200; i++){
//     c1.acelerar();
// }

c1.velocidade = 99; //setter
console.log(c1.velocidade); //getter

// class Pessoa{
//     constructor(nome, sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     get nomeCompleto() {
//         return this.nome + ' ' + this.sobrenome;
//     }

//     set nomeCompleto(valor){
//         valor = valor.split(' '); // Divide a string em uma array
//         this.nome = valor.shift(); // remove o primeiro elemento de um array e retorna esse elemento.
//         this.sobrenome = valor.join(' '); //junta todos os elementos de um array em uma string e retorna esta string.
//     }
// }

// const p1 = new Pessoa('Lucas', 'Trindade');
// p1.nomeCompleto = 'Lucas Trindade';
// console.log(p1.nomeCompleto);

