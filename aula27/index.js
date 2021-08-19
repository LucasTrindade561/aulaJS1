//Operação Ternária: (? :);
//? = se for true, vc usa '?';
//: = Se for false, vc usa ':'.
// (condicao) ? 'Valor para o verdadeiro' : 'Valor para o falso'; 

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';

const corUsuario = 'red';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
