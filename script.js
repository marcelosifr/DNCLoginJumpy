let teste = document.querySelector('botaoTeste')

var res = document.getElementById('resposta')
let cadastroNome = document.querySelectorAll('.inputDado');

function registroDado(){
    if (cadastroNome[0].value !== "" && cadastroNome[1].value !== "" && cadastroNome[2].value !== "" && cadastroNome[3].value !== "" && cadastroNome[4].value !== "") {
       res.innerHTML = `Sucesso!`;
       res.style.color = "#0f7b0f";
    } else {
        res.innerHTML = `Favor preencher corretamente.`;
        res.style.color = "#e73550";
    }
}
