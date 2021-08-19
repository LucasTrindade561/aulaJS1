//funcoes construtoras: 
//criam novos objetos
//unica diferenca da funcao fabrica e da funcao construtora é:
// Que a funcao fabrica é uma funcao normal criada por nos mesmo que retorna um objeto
// Na funcao construtora ela faz esse processo automaticamente, a unica coisa que precisa fazer é criar ela
//Construtora -> precisa comecar com a letra maiscula --- Pessoa (new)

function Pessoa(nome, sobrenome){
    const ID = 12345; //atributos privados = somente dentro da funcao

    const metodoInterno = () =>{//metodo privados = somente dentro da funcao

    };

    // Atributos ou metodos publicos
    this.nome = nome; //Chaves do objeto
    this.sobrenome = sobrenome; //Chaves do objeto

    this.metodo = function(){
        console.log(this.nome + ' Sou um metodo');
    }
}

const p1 = new Pessoa('Lucas', 'Trindade');
const p2 = new Pessoa('Cristiano', 'Schmitz');
p2.metodo();

console.log(p1.sobrenome);
