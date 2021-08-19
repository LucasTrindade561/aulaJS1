// return
// Retorna um valor
// Termina a função

//Funcao closer:
function criaMultplicador(m){
    return function(n){
        return n * m;
    };
}

const duplica = criaMultplicador(2);
const triplica = criaMultplicador(3);
const quadriplica = criaMultplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }
// const fala = falaFrase('Opa');
// const resto = fala('mundo');
// console.log(resto);

// function criaPessoa(nome, sobrenome){
//     return{nome, sobrenome};
// }
// const p1 = criaPessoa('Lucas', 'Trindade');
// console.log(typeof p1);

// document.addEventListener('click', function(){ //Aqui nao retorna mas ela faz alguma coisa
//     document.body.style.backgroundColor = 'red';
// });

// function soma(a, b){
//     return a + b; //Aqui retorna um valor
// }

// function soma2(a, b){
//     console.log(a + b); //Aqui apenas mostra o resultado no log, mas nao faz nenhuma aplicacao grrande em si
// }
// soma2(2, 5);