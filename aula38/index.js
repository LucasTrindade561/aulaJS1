function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros');//Lanca o erro, para o desenvolvedor saber oq se trata
    }
    return x + y;
}

try{//Tenta fazer oq esta pedindo
    console.log(soma(1, 2));
    // console.log(soma(1, '2'));  
}catch(e){//Caso aconteca um erro, aqui ele vai ser tratado
    // console.log(e);
    console.log('Alguma coisa mais legal');    
}


// try{
//     console.log(naoExisto);
// }catch(e){
//     console.log('z');
// }

