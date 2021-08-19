document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); 

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
    
        if(response.status !== 200) throw new Error('ERROR em carregar a pagina');
    
        const html = await response.text();
        loadResult(html);
    }catch(e){
        console.error(e);
    }
       

    // fetch(href)
    //     .then(response => {
    //         if(response.status !== 200) throw new Error('ERROR em carregar a pagina');
    //         return response.text()
    //     })
    //     .then(html => loadResult(html))        
    //     .catch(e => console.error(e));
}

function loadResult(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
