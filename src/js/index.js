const inputs = document.querySelectorAll('input')
const botao = document.getElementById('botao')
const span = document.querySelectorAll('span')
const calendarios = document.querySelectorAll('.item-calendario')

var respostaDia = span[2]
var respostaMes = span[1]
var respostaAno = span[0]

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()
let currentDay = currentDate.getDate()



botao.addEventListener('click', ()=>{
    inputs.forEach((input, item) =>{
        if (input.value === "") {
            calendarios[item].classList.add("vazio")
        }else{
            calendarios[item].classList.remove('vazio')
        }
    })
    const dia = inputs[0].value
    const mes = inputs[1].value
    const ano = inputs[2].value

    if (verificarDia() && verificarMesEAno()) {
        dias(dia)
        meses(mes, ano)
    }
    
})



function anos(input) {
    const ano2 = currentYear - (Number(input)+1)
    respostaAno.innerHTML = ano2
}


function meses(input, input2) {
    if (input <= currentMonth) {
        var falta = currentMonth - input
        anos(input2-1)
    }else{
        var falta = input - currentMonth
        falta = 12 - falta
        anos(input2)
    }
    respostaMes.innerHTML = falta
}

function dias(dia, mes){
    let data = 0
    if (mes == 2) {
        data = 28 - dia + currentDay
    }else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        data = 30 - dia + currentDay
    }else{
        data = 31 - dia + currentDay
    }
    respostaDia.innerHTML = data
}


function verificarMesEAno() {
    const ano = inputs[2].value
    const mes = inputs[1].value
    if (mes > 12) {
        calendarios[1].classList.add("valido")
    } else if (ano > 2023) {
        calendarios[2].classList.add("valido")
    }else{
        calendarios[2].classList.remove("valido")
        calendarios[1].classList.remove("valido")
        return true
    }
}

function verificarDia() {
    const dia = inputs[0].value
    const mes = inputs[1].value
    if (mes == 2 && Number(dia)> 28) {
        calendarios[0].classList.add('inexistente')
    }else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11 )&& Number(dia)> 30) {
        calendarios[0].classList.add('inexistente')
    } else if (Number(dia)> 31) {
        calendarios[0].classList.add("valido")
    }else{
        calendarios[0].classList.remove("inexistente")
        calendarios[0].classList.remove("valido")
        return true
    }
}
