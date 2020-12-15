function helloFunction(target) {
    document.getElementById("hello").innerHTML = getHelloMessage(target);
}

function getHelloMessage(target) {
    return "Hello " + target + "!";
} 

function dotsFunction(count) {
    if (count%2 == 0) {
    document.getElementById("dots").style.color = "green";
    } else {
    document.getElementById("dots").style.color = "red";
    }
    let dots = "";
    for (let i = 0; i < count; i++) {
    dots += ".";
    }
    document.getElementById("dots").innerHTML = dots; 
}

function add() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);
    let result = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = result;
}

function subtract() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);
    let result2 = firstNumber - secondNumber;
    document.getElementById("result").innerHTML = result2;
}

function multiply() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);
    let result3 = firstNumber * secondNumber;
    document.getElementById("result").innerHTML = result3;
}

function divide() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);
    let result4 = firstNumber / secondNumber;
    document.getElementById("result").innerHTML = result4;
}

