
//                 0        1         2 
const alunos = ['Lucas', 'Joao', 'Fernanda'];

//Pode colocar todos os tipos de dados, porem é melhor usar apenas um tipo de dado

//console.log(typeof alunos); //Array é um objeto indexado automaticamente
//console.log(alunos instanceof Array); //descobrir se é realmente um array (true = é, false = não é)

//console.log(alunos.slice(0, -3)); //Fatiar o array no meio com .slice(x, x), ou, (x, -x)

// console.log(alunos[50]); vai dar undefined, ou seja, nao da erro quando botamos um indice que n existe dentro do javascript

//delete alunos[1]; //Deletar o elemento, porém deixar os indices intactos e com isso não mudando os indices
//console.log(alunos);

//const removido = alunos.shift(); //.shift() removendo do comeco do array
//console.log(alunos);
//console.log(removido);

//const removido = alunos.pop(); //Adicionando oq foi removido do array numa variavel

//alunos.pop(); //Removendo do final do array

//alunos.unshift('Pedro'); //Adiciona no comeco do array
//alunos.unshift('Luiza');

//alunos.push('Pedro'); //Adiciona no fim

/*alunos[alunos.length] = 'Luiza'; //alunos.length, conseguir ver a quantidade de dados que estão no array e depois acrescentando mais um valor/*

/*alunos[0] = 'Eduardo';//modificando o valor 0 do array
alunos[3] = 'Luiza';//Acrescentando mais um valor*/

//console.log(alunos[2]); //Acessando o indice 2
//console.log(alunos[1])