//Quem chama o metodo vai se tornar o this

function Calculadora(){    
        this.display = document.querySelector('.display');   
        this.btnClear = document.querySelector('btn-clear');
        
        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            document.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                   this.realizaConta();                     
                }   
            });
        };

        this.clearDisplay = () => this.display.value = '';
        this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);//Tirando apenas um numero com slice

        this.realizaConta = () => {
            let conta = this.display.value;
            try{
                conta = eval(conta); //eval = vai avaliar se vai ser conta ou nao
                if(!conta){
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = conta;
            }catch(e){
                alert('Conta Inválida'); 
                return;
            }
        }

        this.cliqueBotoes = () => {
            document.addEventListener('click', (e) => {//Usando arrowFunction, o this vai continuar sendo o this antigo e nao vai mudar
               const el = e.target;
               if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);// com innerText ele ta pegando o valor interno do botao
               if(el.classList.contains('btn-clear')) this.clearDisplay();
               if(el.classList.contains('btn-del')) this.deleteOne();
               if(el.classList.contains('btn-eq')) this.realizaConta();
               this.display.focus(); //Para nao ocorrer um bug que acontece, tirando o foco do botao que foi clicado na ultima vez

            });
        }

        this.btnParaDisplay = valor => this.display.value += valor; //Aqui esta incrementando o valor interno do botao junto oq ja estava no display


}

const calculadora = new Calculadora();
calculadora.inicia();
