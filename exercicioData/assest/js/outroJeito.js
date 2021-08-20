const data = new Date();
const date = document.querySelector('.container h1');
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
date.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});