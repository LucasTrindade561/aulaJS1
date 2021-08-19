//Funcao CallBack = São coisas que voce chama, apos outras coisas terminarem de ocorrer

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(cb){
    setTimeout(function(){
        console.log('f1');
        if(cb) cb();
    }, rand());
}
function f2(cb){
    setTimeout(function(){
        console.log('f2');
        if(cb) cb();
    }, rand());    
}
function f3(cb){
    setTimeout(function(){
        console.log('f3');
        if(cb) cb();
    }, rand());    
}

f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
  console.log('!!!');  
}


//Criando uma ordem usando callback
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('!!!');
//         });
//     });
// });

