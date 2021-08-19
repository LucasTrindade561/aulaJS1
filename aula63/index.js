// defineProperty -> Getter e Setters = uma maneira de proteger a propriedade 
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; //Usamos esse estoquePrivado, pois pode criar um lop caso trabalhemos com getter e setters
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function(){ // O trabalho do getter normalmente é obter o valor do momento e exibir ele
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('NaN');
            }
            // this.estoque = valor; Nao usar assim, pois dara um erro e virara um lopping
            estoquePrivado = valor; //Nao vai ser alterada enquanto nao mandarmos um numero, com isso protegemos a nossa propriedade
        }
    });

}

function criaProduto(nome){
    return {
        get nome(){
            return nome; //Obtem e exibi o valor
        },
        set nome(valor){
            valor = valor.replace('coisa.', '')
            nome = valor; //Setando o valor
        }
    }
}

// const p2 = criaProduto('Chinelo');
// p2.nome = 'Qaulquer coisa.'
// console.log(p2.nome);

const p1 = new Produto('Camisa', 20, 3);
// console.log(p1);
p1.estoque = '500';
console.log(p1.estoque);