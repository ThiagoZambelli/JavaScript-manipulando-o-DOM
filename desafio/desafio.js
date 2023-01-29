
const lista = document.querySelector(".lista");
const botoes = document.querySelectorAll("[data-mostrar]");

botoes.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        const atributo = verificar(evento.target.dataset.mostrar)
        mudarDisplay(evento.target, atributo)
    })
})

function verificar (elemento){
    if (elemento === "mostrar"){
        return "block"
    }else if (elemento === "esconder") {
        return "none"
    }
}
function mudarDisplay (elemento, valor){
    lista.style.display = valor;
}