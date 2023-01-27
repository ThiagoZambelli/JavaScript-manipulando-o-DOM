/* const robo = document.querySelector("#imagem-robo");


robo.addEventListener("click", () => {
    console.log('ArrowFunction')
})

function dizOi(){
    console.log('Oi')
    console.log('Bem-Vindo')
}
function falaTu(nome){
    console.log(nome);   
}

dizOi(); 

somar.addEventListener("click", () => {mudarValor("soma")})*/

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');


const controle = document.querySelectorAll("[data-controle]");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
       mudarValor(evento.target.dataset.controle, evento.target.parentNode)       
    })
})




function mudarValor(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}