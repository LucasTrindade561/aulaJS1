// Escopo lexico = a função sabe o local que ela foi declarada e todos os seus vizinhos, 
// portanto, qunando ela for executada, ela sempre se lembrara do local que ela 
// foi declarada e dos seus vizinhos

const nome = 'Lucas';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Fernando';
    falaNome();
}
usaFalaNome();