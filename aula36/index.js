function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){ //Usa while quando nao sabemos exatamente quando ira terminar o laço
    rand = random(min, max);
    console.log(rand);
}

console.log('###');

do { //Primeiro executa o codigo e dps cheque se é vdd. Caso o numero for 10 direto, ele ira trocar o valor para que seja true e ele consiga fazer mais vezes, antes de parar
    rand = random(min, max);
    console.log(rand); 
} while (rand !== 10);

// const nome = 'Lucas';
// let control = 0;

// while(control < nome.length){
//     console.log(nome[control]);
//     control++;
// }