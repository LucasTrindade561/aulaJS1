// Constrtura -> molde(classe)
/*
Javascript é beaseado em prototipos para passar propriedades e metodos de um objeto para outro.

Definição de protótico:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de 
modelo ou mode para futuras produções

Todos os objetos tem uma referência interna para um prtótipo (__proto__) que vem da propriedade
prototype da funcção construtora que foi usada para cria-lo. Quando tentamos acessar um membro 
de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e dps 
a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

Prototype já está dentro da função construtora, desde o momento de sua criação, basta vc decidir
se vai utilizar ou não.

Utilizado sempre para metodos, onde que o mesmo metodo faz a mesma coisa para varios objetos

//Object.prototype = o PAI da cadeia de prototypes = 
    pessoa(Primeiro procura) -> Pessoa.prototype(Depois procura aqui) -> Object.Prototype (E aqui por fim)
*/

function Pessoa(nome, sobrenome){ // Primeiro lugar que o js vai procurar
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `Original: ` + this.nome + ' ' + this.sobrenome; 
}

// O JS instancia o prototype instantaneamente, com o __proto__
// Pessoa.prototype === pessoa1.__proto__ --> Isso é igual

Pessoa.prototype.nomeCompleto = function(){ // Se nao tiver nada dentro, ele vai usar o daqui
   return this.nome + ' ' + this.sobrenome;
};

// Instância
const p1 = new Pessoa('Lucas', 'Trindade.'); //<- Pessoa = Função construtora
const p2 = new Pessoa('Cristiano', 'Rafael.'); //<- Pessoa = Função construtora
const data = new Date(); 
const p3 = {
    nome: 'Lucas',
    sobrenome: 'Trindade'
};
Object.setPrototypeOf(p3, Pessoa.prototype);

// console.dir(p1);
// console.dir(p2);
console.log(p3.nomeCompleto());