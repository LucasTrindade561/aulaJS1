// Funções imediatas (IIFE -> Immediatly invoked function expression):
//Elas são executadas imediatamentes, sem serem tocadas pelo o escopo global
(function(idade, peso, altura){
    const sobrenome = 'Trindade'
    function criaNome(nome, sobrenome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Lucas', sobrenome));
    }
    falaNome();
    console.log(idade, peso, altura);

})(30, 70, 1.75);
