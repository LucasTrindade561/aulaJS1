// Async / Await - Faz a mesma coisa que o then(), porem ele é muito mais clean de se observar
function rand(min = 0, max = 3 ){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('ERROR');
                return;
        }

        resolve(msg.toUpperCase());
        return;
        }, tempo);
    });
}

async function executa(){ // async permite que usamos a palavra await dentro de uma funcao
    try{
        const fase1 = await esperaAi('Fase 1', rand()); // await = espera uma promise ser feita
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);        
        console.log('Terminamos na fase: ' + fase3);
    }catch(e){
        console.log(e);
    }
}

executa();

/*
Fases da promise:
    Pendente = Quando ela esta sendo executada, mas nao retornou nenhum valor
        Exemplo: Quando nao usamos a palavra await/then, como se, nos nao tivessemos esperado o retorno da funcao e ja executassemos.
          const fase1 = esperaAi('Fase 1', rand()); --- apareceria, 'pending'
    fullfilled = Quando ela esta resolvida
        Exemplo: Quando nos recebemos os valores, ou seja, conseguimos mostrar no console os valores
    rejected = Quando ela nao foi executada
        Exemplo: Quando nos nao recebemos os valores, ou seja, quando aparece um error no console 
*/ 

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand())
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {console.log('Terminamos na fase: ' + fase)})
//     .catch(e => {console.log(e)});

