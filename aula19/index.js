
//Função classica
/*function soma(x = 1, y = 2){ // 1 e 2, caso n tenha paremetro, os dois vao assumir, ou apenas um dependendo
    const resultado = x + y;
    return resultado;    //Aqui acaba sua função, por causa do return
}

const resultado = soma(); 
console.log(resultado);*/

//Função anonima
/*const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(1024));
*/

//Maneira mais moderna (ARROW FUNCTION)
 const raiz = (n) =>  n ** 0.5; //Usada quando tem apenas uma linha de codigo, é o jeito mais moderno da funcão anonima
console.log(raiz(1024));

/*function saudacao(nome){
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Lucas');
console.log(variavel);*/