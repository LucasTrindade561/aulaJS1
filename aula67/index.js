// Produto -> aumento de preco, desconto
// Camiseta = Cor, caneca = material 
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco += valor;
};
Produto.prototype.desconto = function(valor){
    this.preco -= valor;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); //Linkamos as duas funcoes
    this.cor = cor;
}
//Aqui estamos criando um objeto vazio e dizendo que ele tem um prototype igual a de produto e por fim a camiseta tbm tera o prototype do produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; //Tamo setando o constutor como camiseta, para que o constutor nao seja do produto

Camiseta.prototype.aumento = function(per){
    this.preco = this.preco + (this.preco * (per/100));
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque += valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(per){
    this.preco = this.preco - (this.preco * (per/100));
}

const camiseta = new Camiseta('Regata', 800, 'Preta');
const caneca = new Caneca('Caneca', 90, 'Porcelana', 15);
caneca.estoque = 100;//Aqui to usando setter

console.log(caneca);
console.log(caneca.estoque);//Aqui estou usando o getter
