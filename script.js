
let isDecimalPlaceAllowed;
let isSecondOperand;
let firstOperand;
let secondOperand;
let operator;

var displayScreen = document.querySelector(".display");
var screenContols = document.querySelector(".eraser");
var operatorsDiv = document.querySelector(".operators");
var numberDiv = document.querySelector(".numbers");

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
        alert("second number cannot be ZERO");
        return "OOPS wrong input";
    }
    return num1 / num2;
}

function reset() {
    displayScreen.textContent = "0";
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
        button.textContent = element;
        operatorsDiv.appendChild(button);
    });

    // Numbers, decimal symbol and Equals operator
    let numArr = [1,2,3,4,5,6,7,8,9,".", 0,"="];

    numArr.map(element => {
        let button = document.createElement("button");
        button.textContent = element;
        if (element == "=") {
            button.className = "blue";
        }
        numberDiv.appendChild(button);

    });
}

function operate(num1, operator, num2) {
    let operand1 = parseFloat(num1);
    let operand2 = parseFloat(num2);
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

function wireEvents() {
    screenContols.addEventListener("click", (event)=>{
        if( event.currentTarget == event.target) {
            return;
        }
        if (event.target.textContent === "Clear") {
           reset();
        }
        
    });

    operatorsDiv.addEventListener("click" , (event)=> {
        if( event.currentTarget == event.target) {
            return;
        }
    
        displayScreen.textContent = event.target.textContent;
        operator = event.target.textContent;
        isSecondOperand = true;
        isDecimalPlaceAllowed = true;

    });

        
    numberDiv.addEventListener("click" , (event)=> {
        if( event.currentTarget == event.target) {
           return;
       }

       if( event.target.textContent === "=") {
            console.log("first => " + firstOperand);
            console.log("Operator => " + operator);
            console.log("second => " + secondOperand);
            let result = operate(firstOperand, operator, secondOperand);
            reset();
            displayScreen.textContent = result;

           
       } else {
           if (event.target.textContent == ".") {
               if (!isDecimalPlaceAllowed) {
                   console.log("can allow only one decimal place")
                   return;
               }
               isDecimalPlaceAllowed = false;
           }
           
           if(isSecondOperand) {
                console.log("second operand");
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