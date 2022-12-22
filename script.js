const lightTheme = document.getElementById("light-theme");
const darkTheme = document.getElementById("dark-theme");
const upperEquation = document.getElementById("inputed");
const lowerOperator = document.getElementById("current-input");
const numbers = document.querySelectorAll("button");

let gotFirstNum = false;
let gotSecondNum = false;
let firstNum  = '';
let secondNum = '';
let countNumbers = 0;
let operator = '';
let currentInput = '';
let hadResult = false;
let currentInputDoubler = '';
let firstNumDoubler = '';
let isInfinity = false;

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

    if(countNumbers < 9){

            if(isInfinity == true){
                
                lowerOperator.textContent = a.target.value
                isInfinity = false;
                currentInput = a.target.value;
            }

            else {

                if(countNumbers == 0){

                    currentInput = a.target.value;
                    lowerOperator.textContent = a.target.value;

                }
                else {
    
                    currentInput += a.target.value;
                    lowerOperator.textContent += a.target.value;
                    
                }
                
            }
            
            
            

                
                countNumbers += 1;
               
                currentInputDoubler = currentInput * currentInput;

    }

    


    
}

function AddOperator(a){

    switch(a.target.value){

            case "%":

                if(gotFirstNum == false && currentInput != '') {
                
                operator = "%";
                firstNum = currentInput;
                gotFirstNum = true;

                upperEquation.textContent += firstNum + " ";
                operatorSpan.textContent = operator + " ";
                upperEquation.appendChild(operatorSpan);
                
                countNumbers = 0;
                currentInput = '';
                lowerOperator.textContent = '';

                }

               

                else {

                        operator = "%";
                        upperEquation.textContent = firstNum + " ";
                        operatorSpan.textContent = operator + " ";
                        upperEquation.appendChild(operatorSpan);
                        
                }
               
                   

            break;
            
            case "AC":
                
                operator = '';
                firstNum = ''
                secondNum = '';
                upperEquation.textContent = '';
                lowerOperator.textContent = '';
                operatorSpan.textContent = '';
                gotFirstNum = false;
                gotSecondNum = false;
                countNumbers = 0;
                
                
            break;

            case "root":
               
            if(gotFirstNum == false && currentInput != '') {
                
                operator = "root";
                firstNum = currentInput;
                gotFirstNum = true;
                countNumbers = 0;
                currentInput = '';

                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(rootIcon);
                upperEquation.appendChild(operatorSpan);      
                lowerOperator.textContent = '';

                }

                else {
                    
                    operator = "root";
                    operatorSpan.removeChild(operatorSpan.firstChild);
                    operatorSpan.appendChild(rootIcon);
    
                    if(upperEquation.querySelector("span") !== null){
                        
                    }
                    else {
                        upperEquation.appendChild(operatorSpan);
                    }
                
                
                }

            break;

            case "/":
               
            if(gotFirstNum == false && currentInput != '') {
                
                operator = "/";
                firstNum = currentInput;
                gotFirstNum = true;
                countNumbers = 0;
                currentInput = '';

                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(divideIcon);
                upperEquation.appendChild(operatorSpan);      
                lowerOperator.textContent = '';

                }

                else {
                    
                    operator = "/";
                    operatorSpan.removeChild(operatorSpan.firstChild);
                    operatorSpan.appendChild(divideIcon);
    
                    if(upperEquation.querySelector("span") !== null){
                        
                    }
                    else {
                        upperEquation.appendChild(operatorSpan);
                    }
                
                
                }

            break;

            case "*":
               
            if(gotFirstNum == false && currentInput != '') {
                
                operator = "*";
                firstNum = currentInput;
                gotFirstNum = true;
                countNumbers = 0;
                currentInput = '';

                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(timesIcon);
                upperEquation.appendChild(operatorSpan);      
                lowerOperator.textContent = '';

                }

                else {
                    
                    operator = "*";
                    operatorSpan.removeChild(operatorSpan.firstChild);
                    operatorSpan.appendChild(timesIcon);
    
                    if(upperEquation.querySelector("span") !== null){
                        
                    }
                    else {
                        upperEquation.appendChild(operatorSpan);
                    }
                
                
                }

            break;

            case "-":
               
            if(gotFirstNum == false && currentInput != '') {
                
                operator = "-";
                firstNum = currentInput;
                gotFirstNum = true;
                countNumbers = 0;
                currentInput = '';

                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(minusIcon);
                upperEquation.appendChild(operatorSpan);      
                lowerOperator.textContent = '';

                }

                else {
                    
                    operator = "-";
                    operatorSpan.removeChild(operatorSpan.firstChild);
                    operatorSpan.appendChild(minusIcon);
    
                    if(upperEquation.querySelector("span") !== null){
                        
                    }
                    else {
                        upperEquation.appendChild(operatorSpan);
                    }
                
                
                }

            break;

            case "+":
               
            if(gotFirstNum == false && currentInput != '') {
                
                operator = "+";
                firstNum = currentInput;
                gotFirstNum = true;
                countNumbers = 0;
                currentInput = '';

                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(plusIcon);
                upperEquation.appendChild(operatorSpan);      
                lowerOperator.textContent = '';

                }

                else {
                    
                    operator = "+";
                    operatorSpan.removeChild(operatorSpan.firstChild);
                    operatorSpan.appendChild(plusIcon);
    
                    if(upperEquation.querySelector("span") !== null){
                        
                    }
                    else {
                        upperEquation.appendChild(operatorSpan);
                    }
                
                
                }

            break;

            case "clear":
               
            currentInput = '';
            countNumbers = 0;
            lowerOperator.textContent = '';
            break;

            case "-":
               
            if(gotFirstNum == false && currentInput != '') {
                
                operator = "-";
                firstNum = currentInput;
                gotFirstNum = true;
                countNumbers = 0;
                currentInput = '';

                upperEquation.textContent += firstNum + " ";
                operatorSpan.append(minusIcon);
                upperEquation.appendChild(operatorSpan);      
                lowerOperator.textContent = '';

                }

                else {
                    
                    operator = "-";
                    operatorSpan.removeChild(operatorSpan.firstChild);
                    operatorSpan.appendChild(minusIcon);
    
                    if(upperEquation.querySelector("span") !== null){
                        
                    }
                    else {
                        upperEquation.appendChild(operatorSpan);
                    }
                
                
                }

            break;

            case ".":
               
            currentInput += '.';
            countNumbers += 1;
            lowerOperator.textContent += '.';

            break;

            case "=":
            
            

            if(gotFirstNum == false){
                
                    if(currentInput == ''){
                        firstNumDoubler = firstNum * firstNum;
                        if(hadResult && firstNumDoubler.toString().length < 9){

                        firstNum = firstNum * firstNum;
                        countNumbers = 0;
                        currentInput = '';
                        gotFirstNum = false;
                        lowerOperator.textContent = firstNum;
                        hadResult = true;

                        }
                        
                        else if(firstNumDoubler.toString().length >= 9){

                            isInfinity = true;
                            lowerOperator.textContent = 'INFINITY!';
                        }

                        else {

                        }

                    }


                    else if (currentInputDoubler.toString().length < 9 && currentInput == ''){

                        firstNum = currentInput * currentInput;
                        countNumbers = 0;
                        currentInput = '';
                        gotFirstNum = true;
                        lowerOperator.textContent = firstNum;
                        hadResult = true;

                    }

                    else if (currentInput.toString().length < 9){

                        

                        firstNum = currentInput;
                        countNumbers = 0;
                        currentInput = '';
                        gotFirstNum = true;
                        
                        DoMath(firstNum, secondNum, operator);


                    }

                    else {

                        isInfinity = true;
                        lowerOperator.textContent = 'INFINITY!';
                    }


            }

            else if(gotSecondNum == false) {

                    if (currentInput == '') {
                        
                        if (currentInputDoubler.toString().length < 9){

                        

                            firstNum = currentInput * currentInput;
                            countNumbers = 0;
                            currentInput = '';
                            gotFirstNum = true;
                            lowerOperator.textContent = firstNum;
                            operator = '';
                            hadResult = true;

                        }

                        else {

                            isInfinity = true;
                            lowerOperator.textContent = 'INFINITY!';

                        }
                        
                    }

                    else {
                        
                        secondNum = currentInput;
                        gotSecondNum = true;
                        countNumbers = 0;
                        currentInput = '';

                    if (upperEquation.querySelector("span") !== null){

                        upperEquation.removeChild(upperEquation.firstChild);
                        upperEquation.removeChild(upperEquation.lastChild);
                        upperEquation.appendChild(operatorSpan);
                        operatorSpan.before(firstNum + " ");
                        operatorSpan.after(secondNum);
                    }

                    else {
                        
                        upperEquation.textContent += firstNum + " ";
                        upperEquation.appendChild(operatorSpan);
                        operatorSpan.after(secondNum);

                    }
                    DoMath(firstNum, secondNum, operator);

                    }
                    
            }

                    else {

                        DoMath(firstNum, secondNum, operator);

                    }
            

            break;

            
            

           
                



                



    }
}

function DoMath(num1, num2, operator){
    
        switch(operator){
                
            case "%":

                if(num2 == 0 || num1 == 0){
                    
                    isInfinity = true;
                    lowerOperator.textContent = 'INFINITY!';
                    firstNum = 0;
                    secondNum = 0;
                    currentInput = '';
                    countNumbers = 0;
                    gotFirstNum = false;
                    gotSecondNum = false;
                    operator = '';

                    operatorSpan.textContent = '';
                    upperEquation.textContent = '';
                    

                }

                else {
                    
                    hadResult = true;
                    gotFirstNum = false;
                    firstNum = num1 % num2;
                    secondNum = num2;
                    countNumbers = 0;
                    currentInput = '';
                    lowerOperator.textContent = firstNum;
                   
                    if (upperEquation.querySelector("span") !== null){

                        upperEquation.removeChild(upperEquation.firstChild);
                        upperEquation.removeChild(upperEquation.lastChild);
                        upperEquation.appendChild(operatorSpan);
                        operatorSpan.before(num1 + " ");
                        operatorSpan.after(secondNum);
                    }

                    else {
                        
                        upperEquation.textContent += num1 + " ";
                        upperEquation.appendChild(operatorSpan);
                        operatorSpan.after(secondNum);

                    }
                    
                    

                }

                break;
            
            case "root":

                
                


            }

}



AddListeners();