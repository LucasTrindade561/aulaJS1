//&& -> AND -> E(TODAS AS AÇÕES precisam ser verdadeiras para retornar true)
const expressaoAndTrue = true && true && true && true;
const expressaoAndFalse = true && true && false && true;
console.log(expressaoAndTrue);
console.log(expressaoAndFalse);

//	|| -> OR -> OU (Apenas uma ação precisa ser verdadeira para retornar true)
const expressaoOrTrue = true || false;
const expressaoOrFalse = false || false;
console.log(expressaoOrTrue);
console.log(expressaoOrFalse);

//	! -> NOT -> NÃO (Ele inverte a ação) 
console.log(!true);
console.log(!false);

//Exemplo
const usuario = 'Lucas'; //form usuario digitou
const senha = '12345'; //form usuario digitou

//                            TRUE                FALSE
const vaiLogar = usuario === 'Lucas' && senha === '1234';
console.log(vaiLogar);