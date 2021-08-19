// Metodo de instancia e estaticos - sao metodos que vc pode instanciar sem precisar usar o 'new'.
// Metodos estaticos - referente apenas para a classe nao a instancia do objeto, nao tem acesso aos dados da instancia.
// Metodo de instancia - referente para a instancia do objeto em si e ele tem acesso aos dados da instancia. Exemplo: c1.aumentarVolume().
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Metodo de instancia
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    // Metodo estatico
    static trocaPilha(){
        console.log('Ok, vou trocar');
        // console.log(this.volume); Dara erro, pois no static nao temos os dados da classe ou seja n conseguimos acessar
    }

    static soma(x, y){
        // return x + y;
        console.log(this); // Ja seta o metodo como this
    }
}

const c1 = new ControleRemoto('philips');

// METODO DE INSTANCIA
// c1.aumentarVolume();
// c1.diminuirVolume();
// c1.aumentarVolume()

// METODO ESTATICO
// // c1.trocaPilha(); --- ERRO
// ControleRemoto.trocaPilha(); 

console.log(ControleRemoto.soma());