class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
     }

     handleSubmit(e){ 
         e.preventDefault(); //Travamos o envio
        const fieldsCheck = this.isValid(); 
        const senhasValidas = this.isPassawordValid();

        //Aqui enviamos o formulario
        if(fieldsCheck && senhasValidas){
            alert('Formulario enviado');
            this.formulario.submit(); 
        }
     }

     isValid(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        //Validamos o formulario 
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value){ //Se o campo esta vazio
                this.createError(campo, `Campo ${label} não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
            if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
            if(!this.validaUsuario(campo)) valid = false;
         }
        }
        return valid;
    }

    isPassawordValid(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.createError(senha, 'Campos senha e repetir senha precisam ser iguais');
            this.createError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createError(senha, 'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres.'); 
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){ // se n tivesse !, isso usuario.match(/^[a-zA-Z0-9]+$/g) = receberia true, pois é oq estamos pedindo
            this.createError(campo, 'Nome de usuario precisa conter apenas letras e/ou números'); 
            valid = false;
        }

        return valid;
    }
     
     validaCpf(campo){
         const cpf = new ValidaCpf(campo.value);
         if(!cpf.valida()){
            this.createError(campo, 'CPF invalido.'); // se o cpf esta valid
            return false;
         }
         return true;
     }

     //Tratamento do erro
     createError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); //Estamos adiconando a mensagem de erro no local.
    }
}

const valida = new ValidaFormulario();