// '>' maior que:
const comp = 10 > 5;
console.log(comp);

//'>=' maior que ou igual a:
console.log(10 >= 10, 10 >= 5);

// '<' menor que
console.log(10 < 11, 10 < 6);

// <= menor que ou igual a
console.log(10 <= 11, 10 <= 10, 10 <= 9);

// '==' igualdade (valor) --- nao recomendavel, pois ela nao compara os tipos
const num1 = 10; //Number
const num2 = '10'; //String
const comparacao1 = num1 == num2;
console.log(comparacao1);

// '=== ' igualdade estrita (valor e tipo), recomendavel, pois ela compara os tipos
const num3 = 10; //Number
const num4 = '10'; //String
const comparacao2 = num1 === num2;
console.log(comparacao2);

//!= diferente (valor) --- nao recomendavel, pois ela nao compara os tipos
const num5 = 10; //Number
const num6 = '10'; //String
const comparacao3 = num1 != num2;
console.log(comparacao3);

//!== diferente estrito (valor e tipo) --- recomendavel, pois ela compara os tipos
const num7 = 10; //Number
const num8 = '10'; //String
const comparacao4 = num1 !== num2;
console.log(comparacao4);

