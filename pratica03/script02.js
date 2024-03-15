let campo1 = document.querySelector("#campo1")
let campo2 = document.querySelector("#campo2")
let seletor = document.querySelector("#operacao")
let igual = document.querySelector("#botao")
let res = document.querySelector("#res")

igual.addEventListener("click", calcular)
function calcular() {
    let valor1 = Number(campo1.value)
    let valor2 = Number(campo2.value)
    let operacao = seletor.value

    if(valor1 == '' && valor2 == ''){
        res.innerHTML = 'Preencha os campos corretamete!'
    } else if(operacao === "Soma") {
       res.innerHTML = valor1 + valor2 
    } else if (operacao === "Subtração") {
        res.innerHTML = valor1 - valor2
    } else if (operacao === "Multiplicação") {
        res.innerHTML = valor1 * valor2
    } else if (operacao === "Divisão") {
        res.innerHTML = valor1 / valor2
    }
}