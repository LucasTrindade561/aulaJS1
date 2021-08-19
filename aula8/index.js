const nome = 'Lucas';
const sobrenome = 'Trindade';
const idade = 16;
const peso = 62;
const alturaEmM = 1.68;
let indiceMassaCorporal;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2021 - idade;

//templantes strings
console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}. ${nome} ${sobrenome}, nasceu em ${anoNascimento}.`);
