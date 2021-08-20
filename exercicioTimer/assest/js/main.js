function relogio(){
    function getTimeFromSeconds(s){//Estamos pegando a data do dia 1 e da hora zero que o javascript comecou a contar
        const data = new Date(s * 1000);
        return data.toLocaleTimeString('pt-Br',{
            hour12: false, 
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer; 
    
    function beginTimer(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            beginTimer();
        }
        if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
        }
    });
}

relogio();
