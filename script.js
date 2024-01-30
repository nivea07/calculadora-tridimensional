// Display
var display = document.getElementById("display")

// Array que recebe os botoes pressionados:
var listenerButton = []

// Botoes operacionais:

listenerButton.push(document.getElementById("division"))
listenerButton.push(document.getElementById("multiplication"))
listenerButton.push(document.getElementById("subtraction"))
listenerButton.push(document.getElementById("sum"))

// Botoes numericos:

listenerButton.push(document.getElementById("num1"))
listenerButton.push(document.getElementById("num2"))
listenerButton.push(document.getElementById("num3"))
listenerButton.push(document.getElementById("num4"))
listenerButton.push(document.getElementById("num5"))
listenerButton.push(document.getElementById("num6"))
listenerButton.push(document.getElementById("num7"))
listenerButton.push(document.getElementById("num8"))
listenerButton.push(document.getElementById("num9"))
listenerButton.push(document.getElementById("num0"))

// Botoes adicionais:

listenerButton.push(document.getElementById("point"))

// Botao =
var buttonResult = document.getElementById("result")
//Botao C
var buttonCleanDisplay = document.getElementById("clearDisplay")
// Botao CE
var buttonDeleteDigit = document.getElementById("deleteDigit")


// Verificadores de decimais:

var pointCounter = 0
var pointLimiter = 1

document.addEventListener("DOMContentLoaded", function() {
    if (listenerButton) {
        for (var i = 0; i < listenerButton.length; i++) {
            listenerButton[i].addEventListener("click", showIndisplay)
        }
    }
})

// Funçao do botao result (=)

buttonResult.onclick = function () {
    calculateResult()
}

// Funçao do botao CE:

buttonDeleteDigit.onclick = function () {
    deleteLastDigit()
}

// Funçao do botao C:

buttonCleanDisplay.onclick = function () {
    display.value = ""
    pointCounter = 0
}

// Funçao de calculo do resultado:
function calculateResult() {
    if (verifyOperator(display.value.substring(display.value.length - 1,
        display.value.length))) {
            deleteLastDigit()
        }

    var calculatedValue = calculateArray(display.value)

    if (calculatedValue || calculatedValue == "0") {
        display.value = calculatedValue
    }
}

// Funçao de deletar o ultimo digito (CE):
function deleteLastDigit() {
    if (display.value.length > 0) {
        if (display.value[display.value.length - 1] === ".") {
            pointCounter = 0
        }
        display.value = display.value.substring(0, display.value.length - 1)
    }
}

// Funçao para exibir no display:
function showIndisplay() {
    lastDigit = this.value

    if (verifyOperator(lastDigit)) {
        pointCounter = 0
        if (verifyOperator(display.value.substring(display.value.length - 1,
            display.value.length))) {
                deleteLastDigit()
            }
    }

    if (verifyDecimalPoint(lastDigit) === true) {
        pointCounter ++
        if (pointCounter > pointLimiter) {
            return
        }
    }
    display.value += lastDigit
}

// Funçao de verificaçao do operador:
function verifyOperator(operatorValue) {
    switch (operatorValue) {
        case "*":
            return true
        case "/":
            return true
        case "-":
            return true
        case "+":
            return true
        default:
            return false
    }
}

// Funçao de verificaçao do ponto decimal:
function verifyDecimalPoint(digitedValue) {
    if (digitedValue === ".") {
        return true
    } else {
        return false
    }
}

// Funçao para executar os calculos:
function calculateArray(expression) {
    try {
        return eval(expression)
    } catch (error) {
        console.error("Erro de avalição: ", error)
        return "Error!"
    }
}

// Funçao de multiplicaçao:
function multiplyArray(parameter) {
    return parameter.reduce((acc, val) => acc * parseFloat(val), 1)
}

// Funçao de divisao:
function divideArray(parameter) {
    return parameter.reduce((acc, val) => acc / parseFloat(val))
}

// Funçao de subtraçao:
function subtractArray(parameter) {
    return parameter.reduce((acc, val) => acc - parseFloat(val))
}

// Funçao de adiçao:
function sumArray(parameter) {
    return parameter.reduce((acc, val) => acc + parseFloat(val))
}