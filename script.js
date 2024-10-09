function addButtons(){
  // screen controls
  let screenContols = document.querySelector(".eraser");
  let controlArr = ["Clear", "Del" //"<?xml version=\"1.0\" ?><svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zm.535 2l-4.666 7 4.666 7H20V5H7.07zM16 11v2H9v-2h7z\"/></g></svg>",
    ];

    controlArr.map(element => {
        let button = document.createElement("button");
        button.textContent = element;
        screenContols.appendChild(button);
    })
  

  // operators +, -, *, /
  let operatorArr = ["+", "-", "*", "/"];
  let buttonsDiv = document.querySelector(".operators");

  operatorArr.map(element => {
    let button = document.createElement("button");
    button.textContent = element;
    buttonsDiv.appendChild(button);
  });

  // Numbers and decimal symbol
  let numArr = [1,2,3,4,5,6,7,8,9,0,".","="];
  let numberDiv = document.querySelector(".numbers");

  numArr.map(element => {
    let button = document.createElement("button");
    button.textContent = element;
    if (element == "=") {
        button.id = "equal";
    }
    numberDiv.appendChild(button);

  });


}

addButtons();