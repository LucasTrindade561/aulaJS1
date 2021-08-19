
const nomes = ['Lucas', 'Maria', 'Fernanda', 'Walace', ' Julia'];

// nomes.splice(indice atual, delete, elAdd1, elAdd2, elAdd3); o indice = é aonde vai começar ou ser o tratamento

// const removidos = nomes.splice(3, 2, 'Luiz', 'Otavio');

// pop
// const removidos = nomes.splice(-1, 1);

//shift
// const removidos = nomes.splice(0, 1);

//push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otavio', ' Fernando');
// nomes.push('Lucas')

//unshift
// nomes.splice(0, 0, 'Luiz', ' Betina');

// Muito utilizado, pois pode tratar coisas no meio do array com muita facilidade
nomes.splice(2, 0, 'Luiz', ' Betina');

console.log(nomes);
