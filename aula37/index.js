const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//FUNCIONA em qualquer FOR e DO WHILE
//Continue = continua para próxima interação
//Break = sai direto do laço

// for(let i in numeros){
//     let numero = numeros[i];
//     if(numero === 2){
//         console.log('Pulei');
//         continue;
//     }
//     console.log(numero);
//     if(numero === 7){
//         console.log('7 encontrado, saindo do laço...');
//         break;
//     }
// }


// for (let number of numeros){

//     if(number === 2  || number === 5){
//         console.log('Pulei');
//         continue; //Ele pula a interação do laço. USADO QUANTAS VEZES QUISER.
//     }
//     // if( number === 5){
//     //     continue; //Ele pula a interação do laço 
//     // }

//     console.log(number);
//     if(number === 7){
//         console.log('7 encontrado, saindo da laço...');
//         break;//Ele sai do laço e não executa mais. USADO APENAS UMA VEZ.
//     }

    
// }
// let i = 0;
// while(i < numeros.length){
//     let numero = numeros[i];
//     if(numero === 2){
//         console.log('Pulei');
//         i++;
//         continue;
//     }
//     console.log(numero);
//     if(numero === 7){
//         console.log('7 encontrado, saindo do laço...');
//         i++;
//         break;
//     }
//     i++;
// }
let i = 0;
do{
    let numero = numeros[i];
    if(numero === 2){
        console.log('Pulei');
        i++;
        continue;
    }
    console.log(numero);
    if(numero === 7){
        console.log('7 encontrado, saindo do laço...');
        i++;
        break;
    }
    i++;
}while(i < numeros.length);


