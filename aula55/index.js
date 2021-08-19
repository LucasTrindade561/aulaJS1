const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//METODO CONCAT
// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');

// METODO SPREAD
//... rest = resto dos parametros da funcao/ desestruturacao
//... spread = ele vai espalhar o array
const a3 = [...a1, 'Lucas' ,...a2, ...[7, 8, 9]];
console.log(a3);