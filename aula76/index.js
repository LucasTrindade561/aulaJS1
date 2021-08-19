// Promises - Trabalhamos com o promise quando nao sabemos quando iremos utilizar aquela coisa, por isso é uma coisa assincrona
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { //resolve = quando executa com sucesso, ou seja, resolve a promessa // Reject = quando executa sem sucesso
        if(typeof msg !== 'string') reject(new Error('It is not a string'));
        setTimeout(() => {
            resolve(msg); // pode apenas mandar um parametro dentro do resolve
        }, tempo);
    });
}

esperaAi('Conexao com o BD', rand(1, 3))
    //Sempre que charmamos o resolve(), o then() sera executado
    .then(resposta => {
        console.log(resposta);//As repostas sao oq a gnt recebeu do outro then
        return esperaAi('Buscando dados da BASE', rand(1, 3)); 
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2, rand(1, 3));
        // return esperaAi('Tratando os dados da Base', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe os dados na tela');
    })
    //Sempre que o reject() for chamado, o catch() sera executado, recuperando o erro e fazendo o tratamento dele. Ele é chamado apenas uma vez pois o js ja faz verificacao automaticamente de cada coisa
    .catch(e => {
        console.log('Erro', e);
    }); 

console.log('Isso sera exebido antes de qualquer promisse.'); // Isso sera executado antes, pois ele nao tem tratamento de fluxo ou seja, é executado assim que começar a rodar o motor do js