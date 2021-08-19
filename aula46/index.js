//Closures = É a hablidade da função em acessar seu escopo léxico
function retornaFuncao(nome){
    return function () { //Aqui ela ta fazendo um closure, pois ela ta fechando um escopo quando ela executa essa função
        return nome;
    }
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Cristiano');
console.dir(funcao);
console.dir(funcao2);