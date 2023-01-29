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
const estatisticas = document.querySelectorAll("[data-estatistica]");

const cor = document.querySelector("[data-corRobo]")
const cores = ["Azul", "Branco", "Amarelo", "Rosa"]

const robo = document.querySelector("#imagem-robo");
const controle = document.querySelectorAll("[data-controle]");

let contador = 0;


console.log(cor.attributes.src.nodeValue)
console.log(cor.dataset.corrobo)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


robo.addEventListener("click", ()=>{    
    trocarCor(cor.attributes.src.nodeValue, contador);
    if(contador<3){
        contador++
    }else{
        contador = 0;
    }
})

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
       mudarValor(evento.target.dataset.controle, evento.target.parentNode)   
       atualizaEstatisticas (evento.target.dataset.peca)  
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
function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function trocarCor(imagem, contador){    
    imagem = "img/Robotron-"+cores[contador]+".png"
    cor.attributes.src.nodeValue = imagem;    
}

