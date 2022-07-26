// operator function

function add (firstNum,secondNum) {
    console.log(firstNum+secondNum)
    return firstNum + secondNum
}

function subtract (firstNum,secondNum) {
    console.log(firstNum-secondNum)
    return firstNum - secondNum
}

function multiply (firstNum,secondNum) {
    console.log(firstNum*secondNum)
    return firstNum * secondNum 
}

function divide (firstNum,secondNum) {
    console.log(firstNum/secondNum)

    return firstNum / secondNum 
}

function operator (firstNum,ops,secondNum){
    if (ops == '+') {
        return add(firstNum,secondNum)
    }
    else if ( ops == '-') {
        return subtract(firstNum,secondNum)
    }
    else if ( ops == '*') {
        return subtract(firstNum,secondNum)
    }
    else if ( ops =='/') {
        return divide(firstNum,secondNum)
    }
}

const container = document.querySelector('.container')

// const BTN =document.getElementById("one")
const BTN = document.querySelectorAll('.number')
Array.from(BTN).forEach(link => {
    link.addEventListener('click', function(event) {
        let numVal = link.innerHTML
        let displayUpdated = document.querySelector('.display').textContent=`${numVal}` 
        })
    });




