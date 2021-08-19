let num1 = prompt('Digite um numero');
let num2 = prompt('Digite um outro numero');

num1 = Number(num1);
num2 = Number(num2);

//const resultado = num1 + num2; ---- Nao precisa pois da para botar uma expressao dentro da template string, porem seria melhor se vc usasse, pois seria mais facil de entender o codigo 

alert(`O seu resultado foi: ${num1 + num2}`); 
