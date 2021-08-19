//FACTORY FUNCTION (Função fabrica)
function criaPessoa(nome, sobrenome, peso, altura){
    return{
        nome,
        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' '); // split dividi a string e retorna um array
            this.nome = valor.shift(); //Tirar o primeiro valor do array
            this.sobrenome = valor.join(' '); //Aqui pega todo o resto e une
        },

        fala(assunto = `NADA`){//Funcao factory
            return `${this.nome} esta falando ${assunto}. `//this = vai se refirir a coisa que ta chamando, nesse caso esta se refirindo ao objeto
        },
        altura,
        peso,

        //Getter
        get imc(){//Funcao factory, com o get ele finge ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Lucas', 'Trindade', 64, 1.68);
const p2 = criaPessoa('Crsitano', 'Schmitz', 90, 1.74);
const p3 = criaPessoa('Camila', 'Trindade', 62, 1.62);
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
// p1.nomeCompleto = 'Camila Lorenzi Trindade Schmitz';
// console.log(p1.nome);
// console.log(p1.sobrenome);

