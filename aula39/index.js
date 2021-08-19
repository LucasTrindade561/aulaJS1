function retornaHora(data){
    if(data && !( data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('09-07-2021 13:04:21')
    const hora = retornaHora(data);
    console.log(hora);
}catch(e){
    //Tratar Erro
    // console.log(e);
}finally{
    console.log('Tenha um bom dia.')
}


// try{
//     //Executada quando não há erros
//     // console.log(fcuk);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try{
//         console.log(a);
//     }catch(e){
//         console.log('Deu errado');
//     }finally{
//         console.log('Tambem é finally');
//     }

// }catch(e){
//     //Executada quando há erros
//     console.log('Tratando o erro');
// }finally{
//     //Vai executar sempre
//     console.log('Finally: Fechei o arquivo');//Pos tem q fechar o arquivo sempre, pois dara problema
// }