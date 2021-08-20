const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);//Pegamos o estilo css computados no body
const bgColorBody =stylesBody.backgroundColor; //pegamos especificamente a cor de fundo do body
// console.log(bgColorBody);

for(let p of ps){
    p.style.backgroundColor = bgColorBody;
    p.style.color = 'white';
}