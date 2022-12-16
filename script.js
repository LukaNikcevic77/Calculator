const lightTheme = document.getElementById("light-theme");
const darkTheme = document.getElementById("dark-theme");
const upperEquation = document.getElementById("inputed");
const lowerOperator = document.getElementById("current-input");
const numbers = document.querySelectorAll("button");

let gotFirstNum = false;
let firstNum  = 0;
let secondNum = 0;
let countNumbers = 0;
let operator = '';


const operatorSpan = document.createElement("span");
operatorSpan.style.color = "rgb(198,104,105)";

const rootIcon = document.createElement("i");
rootIcon.setAttribute("class", "fa-solid fa-square-root-variable");

const divideIcon = document.createElement("i");
divideIcon.setAttribute("class", "fa-solid fa-divide");

const timesIcon = document.createElement("i");
timesIcon.setAttribute("class", "fa-solid fa-xmark");

const minusIcon = document.createElement("i");
minusIcon.setAttribute("class", "fa-solid fa-minus");

const plusIcon = document.createElement("i");
plusIcon.setAttribute("class", "fa-solid fa-plus");

function AddListeners(){
    
    for(let i = 0; i < numbers.length; i++){
        
        numbers[i].addEventListener("click", (e) => {

            let checker = parseInt(e.target.value);
            if(isNaN(checker)){

                    
                    AddOperator(e);
                    
                    
            }

            else{

                    AddNumber(e);
            }
        
        
    })
    
    

}
}
function AddNumber(a){

    if(gotFirstNum == false && countNumbers < 9){

            lowerOperator.textContent += a.target.value;
            
            if(countNumbers == 0){

                firstNum = a.target.value;
            }
            else {

                firstNum += a.target.value;
            }

                console.log(firstNum);
                countNumbers += 1;

    }

    else if(countNumbers < 9) {
            lowerOperator.textContent += a.target.value;
            
            if(countNumbers == 0){

            secondNum = a.target.value;
            }
            else {

            secondNum += a.target.value;
            }

            console.log(secondNum);
            countNumbers += 1;

    }

    
}
function AddOperator(a){

    switch(a.target.value){

            case "%":
                if(gotFirstNum == false){

                operator = "%";
                upperEquation.textContent += firstNum + " ";
                operatorSpan.textContent = operator + " ";
                upperEquation.appendChild(operatorSpan);
                gotFirstNum = true;
                countNumbers = 0;
                firstNum = 0;
                lowerOperator.textContent = "";

                }
                else {

                operator = "%";
                operatorSpan.textContent = operator + " ";
                
                }

            break;
            
            case "AC":

                operator = '';
                upperEquation.textContent = '';
                
                gotFirstNum = false;
                countNumbers = 0;
                
                firstNum = 0;
                lowerOperator.textContent = '';
                operatorSpan.textContent = '';
                secondNum = 0;
            break;

            case "root":
               
            if(gotFirstNum == false){
                
            
                operator = "root";
                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(rootIcon);
                upperEquation.appendChild(operatorSpan);      
                
                
                gotFirstNum = true;
                countNumbers = 0;
                firstNum = 0;
                lowerOperator.textContent = "";

                }
                else {

                operator = "root";
                upperEquation.removeChild(upperEquation.lastChild);
                operatorSpan.textContent = " ";
                operatorSpan.removeChild(operatorSpan.lastChild);
                operatorSpan.append(rootIcon);
                upperEquation.appendChild(operatorSpan);
                
                
                }
            break;

            case "/":
               
            if(gotFirstNum == false){
                
            
                operator = "/";
                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(divideIcon);
                upperEquation.appendChild(operatorSpan);      
                
                
                gotFirstNum = true;
                countNumbers = 0;
                firstNum = 0;
                lowerOperator.textContent = "";

                }
                else {

                operator = "/";
                upperEquation.removeChild(upperEquation.lastChild);
                operatorSpan.textContent = " ";
                operatorSpan.removeChild(operatorSpan.lastChild);
                operatorSpan.append(divideIcon);
                upperEquation.appendChild(operatorSpan);
                
                
                }
            break;

            case "*":
               
            if(gotFirstNum == false){
                
            
                operator = "*";
                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(timesIcon);
                upperEquation.appendChild(operatorSpan);      
                
                
                gotFirstNum = true;
                countNumbers = 0;
                firstNum = 0;
                lowerOperator.textContent = "";

                }
                else {

                operator = "*";
                upperEquation.removeChild(upperEquation.lastChild);
                operatorSpan.textContent = " ";
                operatorSpan.removeChild(operatorSpan.lastChild);
                operatorSpan.append(timesIcon);
                upperEquation.appendChild(operatorSpan);
                
                
                }
            break;

            case "-":
               
            if(gotFirstNum == false){
                
            
                operator = "-";
                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(minusIcon);
                upperEquation.appendChild(operatorSpan);      
                
                
                gotFirstNum = true;
                countNumbers = 0;
                firstNum = 0;
                lowerOperator.textContent = "";

                }
                else {

                operator = "-";
                upperEquation.removeChild(upperEquation.lastChild);
                operatorSpan.textContent = " ";
                operatorSpan.removeChild(operatorSpan.lastChild);
                operatorSpan.append(minusIcon);
                upperEquation.appendChild(operatorSpan);
                
                
                }
            break;

            case "+":
               
            if(gotFirstNum == false){
                
            
                operator = "+";
                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(plusIcon);
                upperEquation.appendChild(operatorSpan);      
                
                
                gotFirstNum = true;
                countNumbers = 0;
                firstNum = 0;
                lowerOperator.textContent = "";

                }
                else {

                operator = "+";
                upperEquation.removeChild(upperEquation.lastChild);
                operatorSpan.textContent = " ";
                operatorSpan.removeChild(operatorSpan.lastChild);
                operatorSpan.append(plusIcon);
                upperEquation.appendChild(operatorSpan);
                
                
                }
            break;


            

           
                



                



    }
}



AddListeners();