// forEach()
const a1 = [10, 20, 30];
let total = 0;

a1.forEach(valor => {
    total += valor;
});

// for(let valor of a1){
//     total += valor;
// }

// for(let i in a1){
//     total += a1[i];
// }

console.log(total);