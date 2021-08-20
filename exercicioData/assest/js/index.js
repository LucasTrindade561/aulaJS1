const data = new Date();
const date = document.querySelector('.container h1');
const dataAtual = getDate(data);
date.innerHTML = dataAtual;

function getDayWeekend(diaSemana){
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
    return diasSemana[diaSemana];
}

function getMonthYear(mesAtual){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mesAtual];
}

function getDate(data){
    const dayWeek = getDayWeekend(data.getDay())
    const day = zero(data.getDate());
    const month = getMonthYear(data.getMonth());
    const year = zero(data.getFullYear());
    const hour = zero(data.getHours());
    const minutes = zero(data.getMinutes());
    const sec = zero(data.getSeconds());

    return `${dayWeek}, ${day} de ${month} de ${year}, ${hour}:${minutes}:${sec}.`;
}

function zero(num){
    return num >= 10 ? num : `0${num}`
}
