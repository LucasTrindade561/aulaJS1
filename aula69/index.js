// Polimorfismo - subescrever determinado metodo para q funcione numa outra classe de maneira diferente, nesse exemplo usamos na ContaCorrente
function Conta(agencia, conta, saldo){ //Superclass = base
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if( valor > this.saldo){
        console.log(`Saldo insufiencinte: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.despositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta}. Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); // Fazendo a heranca
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){ // Reescrevemos o metodo sacar na conta filha de Conta
    if( valor > (this.saldo + this.limite)){
        console.log(`Saldo insufiencinte: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo); // Fazendo a heranca
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaCorrente;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.despositar(10);
cc.sacar(110);
cc.sacar(1);

console.log('######')

const cp = new ContaPoupanca(11, 22, 0);
cp.despositar(10);
cp.sacar(110);
cp.sacar(1);