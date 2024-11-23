const carro = document.getElementById('carro')
const direita = document.getElementById('btn-direita')
const esquerda = document.getElementById('btn-esquerda')

let animação = null;
let tamanhoMax = null

function init() {
carro.style = "position:relative;left:0px; width:150px"
tamanhoMax = window.innerWidth - parseInt(carro.style.width)
}



function movimentar (direção) {
    const posiçãoAtual = parseInt(carro.style.left)
    if(direção > 0){
        if(posiçãoAtual < tamanhoMax){
            carro.style.left = posiçãoAtual + (10*direção) + "px"
        }

    }
    else if(direção < 0){
        if(posiçãoAtual > 0){
            carro.style.left = posiçãoAtual + (30*direção) + "px"

        }
    }
}

parar.addEventListener('click', (evt) => {
     clearInterval(animação)
    })

direita.addEventListener('click', () => {
    clearInterval(animação)
    animação= setInterval(() => movimentar(1),10)
})


esquerda.addEventListener('click', () => {
    clearInterval(animação)
    animação = setInterval(() => movimentar(-1),10)
})


window.onload = init

window.addEventListener('resize', () => {
tamanhoMax = window.innerWidth - parseInt(carro.style.width);
})


