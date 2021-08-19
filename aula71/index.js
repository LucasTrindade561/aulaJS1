// Map é identico ao objeto, só muda o jeito que se cria e obtem os valores
// Usamos o set para atribuirmos valores
// Usamos o get para obtermos os valores
const pessoas = [
    {id: 3, nome: 'Lucas'},
    {id: 2, nome: 'Taubate'},
    {id: 1, nome: 'Eduardo'}
];

// const novasPessoas = {};
// for(const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});// Primeiro a chave (id), e dps o valor({...pessoa})
}

//Interar sobre Map
//novasPessoas.keys() = pegar so as chaves
// values() = pegar os valores
for(const pessoa of novasPessoas.values()){
    // console.log(pessoa);
}

novasPessoas.delete(2);
console.log(novasPessoas);