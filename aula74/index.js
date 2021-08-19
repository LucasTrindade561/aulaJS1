// Herança com classes --- Nunca façe uma hierarquia muito grande
// Herança vem de cima para baixo, ou seja, vc herda dos teus pais mas tu nao herda nada para os seus pais
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        };
        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico { // Fazendo a herença
    constructor(nome, cor, modelo){
        // Super = Estamos chamando o constutor da classe pai e executamos dentro de Smartphone para que ele execute todo o codigo que codiamos la dentro
        // Basicamente estamos mandando o nome para la
        super(nome); 

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('OLha voce alterou o metodo ligar');
    }

    falaOi(){
        console.log('oi'); // So esta no tablet
    }

}

const t1 = new Tablet('iPad', true);
t1.falaOi();
console.log(t1);
