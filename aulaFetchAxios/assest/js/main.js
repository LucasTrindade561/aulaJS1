// fetch('pessoas.json')
//     .then(response => response.json()) // o json é insta configurado para um objeto js quando é chamado
//     .then(json => carregaElementosPagina(json));

// Usada pois sempre é apenas uma linha de codigo 
axios('pessoas.json') //Axios ele pega direto os dados dentro de determinada coisa, aqui, ele pegou e convertou insta o json
    .then(response => carregaElementosPagina(response.data));

function carregaElementosPagina(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        //A cada linha do json nos fizemos isso
        const tr = document.createElement('tr'); //linha da tabela

        let td1 = document.createElement('td'); // oq esta escrito dentro de cada linha da tabela, ou seja, a coluna da tabela
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);
        
        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}