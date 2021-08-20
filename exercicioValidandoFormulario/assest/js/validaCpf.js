class ValidaCpf{
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);

        this.novoCpf = cpfParcial + digito1 + digito2;
    }


    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length  !== 11) return false;
        if(this.isSequencia()) return false;
        
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }

    // Quando nao tem this no metodo, podemos mudar para static, pois nao recebemos nenhum dado da instancia
    static criaDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let sn of cpfParcial){ //Estamos somando todos os numeros do cpfParcial.
            total += reverso * Number(sn);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
        
    }
    
    isSequencia(){
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo.length;
    }

}

// const cpf = new ValidaCpf('0.70.987.720-03');
// if(cpf.valida()){ // cpf valido funcinou = true
//     console.log('Cpf válido');
// }else{ //false
//     console.log('Cpf inválido');
// }