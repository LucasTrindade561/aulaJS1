const num = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número +2 é ${num + 2}.</p>`;
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${num ** 0.5}.</p>`;
texto.innerHTML += `<p>O ${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}.</p>`;
texto. innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Duas casas: ${Number(num.toFixed(2))}</p>`



/* Existe outro jeito, no qual eu fiz da primeira vez = Porem o jeito que esta é 10000000000000 vezes melhor
Aqui no Js
const textoRaiz = document.getElementById('textoRaiz');
const textoInteiro = document.getElementById('textoInteiro');
const textoNan = document.getElementById('textoNan');
const textoBaixo = document.getElementById('textoBaixo');
const textoCima = document.getElementById('textoCima');
const textoDuasCasas = document.getElementById('textoDuasCasas');

No html: 
/*   <div id="textoRaiz">Texto</div>
        <div id="textoInteiro">Texto</div>
        <div id="textoNan">Texto</div>
        <div id="textoBaixo">Texto</div>
        <div id="textoCima">Texto</div>
        <div id="textoDuasCasas">Texto</div>*/
