//funcao recursivas -> sao funcao que se chamam de volta
function recursiva(max){
    console.log(max);
    if(max >= 13000) return; //Tem um limite, ou seja, chegando em um determinado limite ele vai parar de executar, pois vai achar que tem um erro no sistema   
    max++;
    recursiva(max);
}

recursiva(0);