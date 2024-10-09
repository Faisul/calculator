function addButtons(){
    // screen controls
    let screenContols = document.querySelector(".eraser");
    let controlArr = ["Clear", "Del"];
    controlArr.map(element => {
        let button = document.createElement("button");
        button.textContent = element;
        button.className = "blue";
        screenContols.appendChild(button);
    });
  
    screenContols.addEventListener("click", (event)=>{
        alert(event.target.textContent);
    });

    // operators +, -, *, /
    let operatorArr = ["+", "-", "*", "/"];
    let buttonsDiv = document.querySelector(".operators");

    operatorArr.map(element => {
        let button = document.createElement("button");
        button.textContent = element;
        buttonsDiv.appendChild(button);
    });
    buttonsDiv.addEventListener("click" , (event)=> {
        alert(event.target.textContent);
    });

    // Numbers and decimal symbol
    let numArr = [1,2,3,4,5,6,7,8,9,".", 0,"="];
    let numberDiv = document.querySelector(".numbers");

    numArr.map(element => {
        let button = document.createElement("button");
        button.textContent = element;
        if (element == "=") {
            button.className = "blue";
        }
        numberDiv.appendChild(button);

    });
    numberDiv.addEventListener("click" , (event)=> {
        alert(event.target.textContent);
    });
}

addButtons();