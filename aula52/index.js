//funcoes geradoras --- praticamente faz um pausa entre determinadas acoes
// function* geradora1(){
//     // codigo...
//     yield 'valor 1';
//     // codigo...
//     yield 'valor 2';
//     // codigo...
//     yield 'valor 3';
// }

// const g1 = geradora1();
// for(let valor of g1){
//     console.log(valor);
// }


// function* contador(){
//     let i = 0;
//     while(true){
//         yield i;
//         i++;
//     }
// }
// const c1 = contador();
// console.log(c1.next().value);
// console.log(c1.next().value);
// console.log(c1.next().value);
// console.log(c1.next().value);

// function* geradora3(){
//     yield 0;
//     yield 1;
//     yield 2;
// }
// function* geradora4(){
//     yield* geradora3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = geradora4();
// for(let valor of g4){
//     console.log(valor);
// }

function* geradora5(){//se usar return, o yield abaixo nao vai funcionar
    yield function (){
        console.log('Vim do y1');
    }
    
    // return function(){ Nao usar pois, o yield abaixo n ira funcionar
    //     console.log('Vim do return');
    // }

    // ...

    yield function(){
        console.log('Vim do y2');
    }

}
const g5 = geradora5();
const f1 = g5.next().value;
const f2 = g5.next().value;
f1();
f2();