let isDecimalPlaceAllowed;
let isSecondOperand;
let firstOperand;
let secondOperand;
let operator;

var displayScreen = document.querySelector(".display");
var screenContols = document.querySelector(".eraser");
var operatorsDiv = document.querySelector(".operators");
var numberDiv = document.querySelector(".numbers");

document.addEventListener("keypress", (event) => {
    let keyPressed = document.querySelector(`${'#btn' + event.keyCode}`);
    if(keyPressed) {
         keyPressed.click();
    }
});

function add(num1, num2) {
    return num1 + num2;
}

function subract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert("Divisor cannot be ZERO");
        return "OOPS";
    }
    return num1 / num2;
}

function reset() {
    displayScreen.textContent = "";
    isSecondOperand = false;
    isDecimalPlaceAllowed = true;
    firstOperand = "";
    secondOperand = "";
    operator = "";
}

function renderUi(){
  
    let controlArr = ["Clear", "Del"];
    controlArr.map(element => {
        let button = document.createElement("button");
        button.textContent = element;
        button.className = "blue";
        screenContols.appendChild(button);
    });

    // operators +, -, *, /
    let operatorArr = ["+", "-", "*", "/"];

    operatorArr.map(element => {
        let button = document.createElement("button");
        button.id = "btn" + element.charCodeAt(0);
        button.textContent = element;
        operatorsDiv.appendChild(button);
    });

    // Numbers, decimal symbol and Equals operator
    let numArr = ["1","2","3","4","5","6","7","8","9",".", "0","="];

    numArr.map(element => {
        let button = document.createElement("button");
        button.textContent = element;
        button.id = "btn" + element.charCodeAt(0);
        if (element == "=") {
            button.className = "blue";
        }
        numberDiv.appendChild(button);

    });
}

function operate(num1, operator, num2) {
    let operand1 = Number(num1);
    let operand2 = Number(num2);
    console.log(num1 + " " + operator +" "+ num2);
    switch(operator) {
        case "+" :
            console.log("+");
            return add(operand1, operand2);
        
        case "-" :
            console.log("-");
            return  subract(num1, num2);

        case "*" :
            console.log("*");
            return  multiply(num1, num2);

        case "/" :
            console.log("/");
            return divide(num1, num2);
    }
}


function removeLastCharacter(str) {
    return str.substring(0, str.length - 1);
}

function deleteOneCharacter() {
    if(displayScreen.textContent === firstOperand) {
        firstOperand = removeLastCharacter(firstOperand);
        displayScreen.textContent = firstOperand;
    } else if(displayScreen.textContent === operator) {
        operator = removeLastCharacter(operator);
        displayScreen.textContent = operator;
    } else if(displayScreen.textContent === secondOperand) {
        secondOperand = removeLastCharacter(secondOperand);
        displayScreen.textContent = secondOperand;
    }
}

function calculate() {
    let result = parseFloat(operate(firstOperand, operator, secondOperand).toFixed(4));
    reset();
    if (result) {
        displayScreen.textContent = result;
    }
    return result;
}

function wireEvents() {
    screenContols.addEventListener("click", (event)=>{
        console.log("clicked clear/del");
        if( event.currentTarget == event.target) {
            return;
        }
        if (event.target.textContent === "Clear") {
           reset();
        } else if(event.target.textContent === "Del") {
            deleteOneCharacter();
        }
    });

    operatorsDiv.addEventListener("click" , (event)=> {
        console.log("clicked operators");
        if( event.currentTarget == event.target) {
            return;
        }
        if(isSecondOperand) {
           firstOperand = calculate();
        }
    
        displayScreen.textContent = event.target.textContent;
        operator = event.target.textContent;
        isSecondOperand = true;
        isDecimalPlaceAllowed = true;

    });

        
    numberDiv.addEventListener("click" , (event)=> {
        console.log("clicked numbers");
        if( event.currentTarget == event.target) {
           return;
       }

       if( event.target.textContent === "=") {
            calculate();
       } else { 
        // decimal points
        if (event.target.textContent == ".") {
               if (!isDecimalPlaceAllowed) {
                   console.log("can allow only one decimal place")
                   return;
               }
               isDecimalPlaceAllowed = false;
           }
           
           if(isSecondOperand) {
                // console.log("second operand");
                secondOperand += event.target.textContent;
                displayScreen.textContent = secondOperand;
           } else {
                firstOperand += event.target.textContent;
                displayScreen.textContent = firstOperand;
           }
       }
   });
}



function start() {
    reset();
    renderUi();
    wireEvents();
}

start();