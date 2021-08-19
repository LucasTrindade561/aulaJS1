// Switch/Case:
function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terca';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'A semana tem sete dias porra, n inventa de botar outros, ok filha da puta corna mae gorda?';
            return diaSemanaTexto;
        }
}

const data = new Date('2004-09-25 21:32:45'); 
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);

//let diaSemanaTexto;
// switch (diaSemana){
// case 0:
//     diaSemanaTexto = 'Domingo';
//     break;
// case 1:
//     diaSemanaTexto = 'Segunda';
//     break;
// case 2:
//     diaSemanaTexto = 'Terca';
//     break;
// case 3:
//     diaSemanaTexto = 'Quarta';
//     break;
// case 4:
//     diaSemanaTexto = 'Quinta';
//     break;
// case 5:
//     diaSemanaTexto = 'Sexta';
//     break;
// case 6:
//     diaSemanaTexto = 'Sabado';
//     break;
// default:
//     diaSemanaTexto = 'A semana tem sete dias porra, n inventa de botar outros, ok filha da puta corna mae gorda?';    
//     break;
//}


//console.log(diaSemana, diaSemanaTexto);