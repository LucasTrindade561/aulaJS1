//Declaração de função (Function hoisting - seria botar a função para cima de todos os outros códigos - apenas na declaração de função)
function falaOi(){
    console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe), ou seja, ela é um dado como um dado dentro de uma variavel.
//Function Expression: (Já está dentro de uma variavel/const)
const souUmDado = function(){
    console.log('Sou um dado');
}
souUmDado();

// function executarFuncao(funcao){
//     console.log('Vou executar sua função abaixo:');
//     funcao();
// }
// executarFuncao(souUmDado);

//Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function')
};
arrowFunction();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
}
obj.falar();