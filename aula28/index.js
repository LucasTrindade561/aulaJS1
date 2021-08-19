// Date é a uma função construtora
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatarData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);

//const tresHora = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHora + umDia); // 01/01/1970 Timestamp unix ou época unix
// //Tem que ter pelo menos dois paremetros, senao o motor ira reconhecer o ano como se fosse milisegundos
/*const date = new Date('2021-06-30 15:49:20.100');
console.log('Dia', date.getDate()); //Recuperar o Dia
console.log('Mes', date.getMonth() + 1); //Recuperar Mes
console.log('Ano', date.getFullYear()); //Recuperar Ano
console.log('Hora', date.getHours()); //Recuperar Hora
console.log('Minuto', date.getMinutes()); //Recuperar Minuto
console.log('Seg', date.getSeconds()); //Recuperar Segundos
console.log('ms', date.getMilliseconds()); //Recuperar Milisegundos
console.log('Dia Semana', date.getUTCDay()); //Recuperar Dia da semana - 0 - Domingo, 6 - Sabado
console.log(date.toString());*/
