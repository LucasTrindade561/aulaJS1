//Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 ou 5 = FizzBuzz
// Número não é divisível por 3 ou 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna oq voce recebeu
// Use a função com números de 0 a 100
function retorneFizzBuzz(n){
    if(typeof n !== 'number') return n;
    if(n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if(n % 3 === 0) return 'Fizz';
    else if(n % 5 === 0 ) return 'Buzz'; 
    return n;
}

console.log('a', retorneFizzBuzz('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, retorneFizzBuzz(i));
}

