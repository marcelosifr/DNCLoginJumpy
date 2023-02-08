let teste = document.getElementById('botaoTeste')

var res = document.getElementById('resposta')
let cadastroNome = document.querySelectorAll('.inputDado');
let error = document.querySelectorAll('.error')
let formulario = document.getElementById('form')


function registroDado(){
    if (cadastroNome[0].value === "" || cadastroNome[1].value === "" || cadastroNome[2].value === "" || cadastroNome[3].value === "" || cadastroNome[4].value === "") {
        res.innerHTML = `Favor preencher corretamente.`;
        res.style.color = "#e73550";

    } else if (cadastroNome[4].value.length < 8 || cadastroNome[4].value.length > 15){
        res.innerHTML = `Favor preencher corretamente.`;
        res.style.color = "#e73550";
    }
    else {
        
        res.innerHTML = `Sucesso!`;
        res.style.color = "#0f7b0f";
        
    }
    
   
}

teste.addEventListener ('click', validacao)

function validacao (){
    if(cadastroNome[0].value === ""){
        error[0].innerHTML = '*Campo obrigatório*';
        error[0].style.color = "#e73550";
       
    } else {
        error[0].innerHTML = ""
    }

    if(cadastroNome[1].value === ""){
        error[1].innerHTML = '*Campo obrigatório*';
        error[1].style.color = "#e73550";
    } else {
        error[1].innerHTML = ""
    }

    if(cadastroNome[2].value === ""){
        error[2].innerHTML = '*Campo obrigatório*';
        error[2].style.color = "#e73550";
    } else {
        error[2].innerHTML = ""
    }

    if(cadastroNome[3].value === ""){
        error[3].innerHTML = '*Campo obrigatório*';
        error[3].style.color = "#e73550";
    } else {
        error[3].innerHTML = ""
    }

    if(cadastroNome[4].value === ""){
        error[4].innerHTML = '*Campo obrigatório*';
        error[4].style.color = "#e73550";
    } else if (cadastroNome[4].value.length < 8 || cadastroNome[4].value.length > 15){
        error[4].innerHTML = 'A senha deve conter entre 8 e 15 caracteres.'
        error[4].style.color = "#e73550";
    } 
    else {
        error[4].innerHTML = ""
    }

    return false;
}

