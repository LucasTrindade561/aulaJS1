// Metodos uteis para o promise
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { 
        if(typeof msg !== 'string') {
            reject('ERROR');
            return;
    }

        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);
    });
}

// Promise.all / Promise.race / Promise.resolve / Promise.reject

// Promise.reject - Quando queremos rejeitar de cara uma promessa 
function baixaPgn(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Pagina em cache');
    } else{
        return esperaAi('Baixei a pagina ', 3000);
    }
}

baixaPgn()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Error', e));

// Promise.resolve - Quando queremos entregar de cara uma promessa resolvida
// function baixaPgn(){
//     const emCache = false;

//     if(emCache){
//         return Promise.resolve('Pagina em cache');
//     } else{
//         return esperaAi('Baixei a pagina ', 3000);
//     }
// }

// baixaPgn()
//     .then(dadosPagina => {
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log(e));


// Promise.race = Literalmente uma corrida, quem chegar fizer primeiro, sera exibido ou vai retornar o erro
// const promises = [
//     esperaAi('Promise 1', rand(1, 3)),
//     esperaAi('Promise 2', rand(1, 3)),
//     esperaAi('Promise 3', rand(1, 3)),
//     // esperaAi(1000, 1000),
// ];

// Promise.race(promises).then(valor => {
//     console.log(valor);
// }).catch(e =>{
//     console.log(e);
// });

// // Promise.all = Retorna tudo de uma vez em forma de array, ou quando uma dar falha, ele ira retornar a falha
// const promises = [
//     'Primeiro valor', 
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     'Outro valor'
// ];

// Promise.all(promises).then(valor => {
//     console.log(valor);
// }).catch(e =>{
//     console.log(e);
// });
