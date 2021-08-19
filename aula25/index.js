//Falsy = 0, "", ``, '', null, undefined, NaN --- valores avaliadores por falso

// && -> false && true -> false 'o valor mesmo'
/*function falaOi(){
    return 'oi';
};
const vaiExecutar = 'Lucas';
console.log(vaiExecutar && falaOi());*/

//|| -> true || false -> vai retornar o primeiro 'o valor verdadeiro'
//console.log(0 || false || null || 'Lucas' || true);
/*const corUsuario = 'red';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN; //vai mostrar aqui

console.log(a || b || c || d || e);