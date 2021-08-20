//Quem chama o metodo vai se tornar o this

function criaCalculadora(){
    return{
        display: document.querySelector('.display'),     
        btnClear: document.querySelector('btn-clear'),
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                   this.realizaConta(); 
                     
                }   
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);//Tirando apenas um numero com slice
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta Inválida'); 
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {//Usando arrowFunction, o this vai continuar sendo o this antigo e nao vai mudar
               const el = e.target;
               if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
               } 

               if(el.classList.contains('btn-clear')){
                this.clearDisplay();
               }

               if(el.classList.contains('btn-del')){
                this.deleteOne();
               }

               if(el.classList.contains('btn-eq')){
                this.realizaConta();
               }

               this.display.focus(); 

            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
