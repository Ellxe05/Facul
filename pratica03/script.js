let botao = document.getElementById("botao")
let estaQuebrado = false

botao.addEventListener('mouseover', passarMouse)
function passarMouse() {
    if(!estaQuebrado) {
        botao.style.background = 'pink'
    }
}

botao.addEventListener('mouseout', tirarMouse)
function tirarMouse() {
    if(!estaQuebrado) {
        botao.style.background = 'yellow'
    }
}

botao.addEventListener('click', clicar)
function clicar() {
    botao.style.background = 'red'
    botao.style.color = 'white'
    botao.innerText = 'Ops! Quebrou...'
    estaQuebrado = true
}