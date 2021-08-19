function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobronome = form.querySelector('.sobrenome');  
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        /*function addPessoaArray(nomeArray, sobrenomeArray, pesoArray, alturaArray){
            return { nomeArray, sobrenomeArray, pesoArray, alturaArray};
        };
        pessoas.push(addPessoaArray(nome.value, sobronome.value, peso.value, altura.value));*/

        pessoas.push({
            nome: nome.value,
            sobronome: sobronome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobronome.value} ${peso.value} ${altura.value} <p>`;

    };

    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();