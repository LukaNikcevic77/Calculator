const lightTheme = document.getElementById("lighticon");
const darkTheme = document.getElementById("darkicon");
const frame = document.getElementById("cf");
const inputFrameHolder = document.getElementById("ifh");
const inputFrame = document.getElementById("if");
const themeChangeFrame = document.getElementById("change-theme");
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
let addedDot = false;
let flip = 0;

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

                else {
                    
                        AddNumber(e);

                }
        
    })
    
    

}
}
function AddNumber(a){

    if(countNumbers < 9){

            if(isInfinity == false) {

                if(countNumbers == 0){

                    currentInput = a.target.value;
                    lowerOperator.textContent = a.target.value;

                }

                else {
    
                    currentInput += a.target.value;
                    lowerOperator.textContent += a.target.value;
                    
                }
                
                countNumbers += 1;
                currentInputDoubler = currentInput * currentInput;

            }
    
    }

}

function AddOperator(a){

    switch(a.target.value){

            case "%":

                appendText("%");
                
            break;
            
            case "AC":

                addedDot = false;
                operator = '';
                firstNum = ''
                secondNum = '';
                upperEquation.textContent = '';
                lowerOperator.textContent = '';
                operatorSpan.textContent = '';
                gotFirstNum = false;
                gotSecondNum = false;
                countNumbers = 0;
                isInfinity = false;
                hadResult = false;
                currentInput = '';
                 
            break;

            case "root":
                
                appendText("root", rootIcon);

            break;

            case "/":
               
                appendText("/", divideIcon);

            break;

            case "*":
               
                appendText("*", timesIcon);

            break;

            case "+":
               
                appendText("+", plusIcon);
            
            break;

            case "clear":

               if(isInfinity == false && hadResult == false) {

                currentInput = '';
                countNumbers = 0;
                lowerOperator.textContent = '';

            }
            
            break;

            case "-":
               
               appendText("-", minusIcon);

            break;

            case ".":
               
            if (isInfinity == false && addedDot == false && currentInput != ''){
                
                addedDot = true;
                currentInput += '.';
                countNumbers += 1;
                lowerOperator.textContent += '.';

            }
            
            break;

            case "=":
            
            if (isInfinity == false) {

                addedDot = false;

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
                        
                        else if (firstNumDoubler.toString().length >= 9){

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
                    else if(currentInput.toString().length < 9 && hadResult == false){
                        
                        firstNum = currentInput * currentInput;
                        firstNumDoubler = firstNum * firstNum;
                        countNumbers = 0;
                        currentInput = firstNum;

                        if(firstNumDoubler.toString().length >= 9){

                            isInfinity = true;
                            lowerOperator.textContent = 'INFINITY!';

                        }

                        else {

                            lowerOperator.textContent = firstNum;

                        }
                        
                    }

                    else if (currentInput.toString().length < 9 ){

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

            else if (gotSecondNum == false) {

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

            }

            break;

            case "switchtheme":

                SwitchTheme();

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
                    firstNum = Number(num1) % Number(num2);
                    secondNum = num2.toString().slice(0, 9);
                    countNumbers = 0;
                    currentInput = '';
                    lowerOperator.textContent = firstNum.toString().slice(0, 9);
                   
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
                firstNum = Math.pow(Number(num1), 1/Number(num2));
                secondNum = num2.toString().slice(0, 9);
                countNumbers = 0;
                currentInput = '';
                appendResult(num1);
                
            }
            
                break;

            case "/":

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
                firstNum = Number(num1) / Number(num2);
                secondNum = num2.toString().slice(0, 9);;
                countNumbers = 0;
                currentInput = '';
                appendResult(num1);
                
            }

            break;
                
            case "*":

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
                firstNum = Number(num1) * Number(num2);
                secondNum = num2.toString().slice(0, 9);;
                countNumbers = 0;
                currentInput = '';
                appendResult(num1);
                
            }

            break;
                
            case "-":

                hadResult = true;
                gotFirstNum = false;
                firstNum = Number(num1) - Number(num2);
                secondNum = num2.toString().slice(0, 9);
                countNumbers = 0;
                currentInput = '';
                appendResult(num1);
                
            break;
                
            case "+":

                hadResult = true;
                gotFirstNum = false;
                firstNum = Number(num1) + Number(num2);
                secondNum = num2.toString().slice(0, 9);
                countNumbers = 0;
                currentInput = '';
                appendResult(num1);
                
            }



            }

function SwitchTheme(){

    if (flip == 0){

        flip = 1;
        
        darkTheme.style.color = "rgb(240,240,240)";
        lightTheme.style.color = "rgb(110,112,118)";
        RedesignEverything(flip);
    }

    else {
        
        flip = 0;
        lightTheme.style.color = "rgb(110,112,118)";
        darkTheme.style.color = "rgb(237,237,238)";
        
        RedesignEverything(flip);
    }

}




AddListeners();
function RedesignEverything(a) {

        if(a == 1){

            frame.style.backgroundColor = "rgba(255,255,255, 1)";
            inputFrame.style.backgroundColor = "rgba(249,249,249,255)"
            inputFrameHolder.style.backgroundColor = "rgba(249,249,249,255)";
            themeChangeFrame.style.backgroundColor = "rgba(249,249,249,255)"
            lowerOperator.style.color = "rgba(41,45,54,255)";
            upperEquation.style.color = "rgb(41,45,54,255)";
            for(let i = 0; i < numbers.length; i++){
                if(numbers[i].classList.contains('light') || numbers[i].classList.contains('dark')){

                }
                else {

                    numbers[i].style.backgroundColor = "rgba(247,247,247,255)";
                    if(numbers[i].classList.contains('white')){
                        numbers[i].style.color = "rgba(59,63,71,255)";
                    }
                    else {

                    }
                    

                }
                
            }
            

        }

        else {

            frame.style.backgroundColor = "rgba(34, 37, 45, 0.89)";
            inputFrame.style.backgroundColor = "rgba(41, 45, 54, 0.89)";
            inputFrameHolder.style.backgroundColor = "rgba(41, 45, 54, 0.89)";
            themeChangeFrame.style.backgroundColor = "rgba(73, 80, 95, 0.884)"
            lowerOperator.style.color = "rgba(255,255,255,255)";
            upperEquation.style.color = "rgb(255,255,255,255)";
            for(let i = 0; i < numbers.length; i++){
                if(numbers[i].classList.contains('light') || numbers[i].classList.contains('dark')){
                    
                }
                else {

                    numbers[i].style.backgroundColor = "rgba(29, 32, 37, 1)";
                    if(numbers[i].classList.contains('white')){
                        numbers[i].style.color = "rgba(255,255,255, 1)";
                    }
                    else {

                    }

                }
                
            }

        }


}

function appendText(a, b){
    
    if(isInfinity == false) {

        if(gotFirstNum == false && currentInput != '') {
    
    operator = a;
    firstNum = currentInput;
    gotFirstNum = true;
    while(upperEquation.lastChild != null){
        upperEquation.removeChild(upperEquation.lastChild);
    }
    
    hadResult = false;
    gotSecondNum = false;
    while(operatorSpan.lastChild != null){
        operatorSpan.removeChild(operatorSpan.lastChild);
    }
    if(b == undefined){
        upperEquation.textContent += firstNum + " ";
    operatorSpan.textContent = operator + " ";
    }
    else {
        upperEquation.textContent += firstNum + " ";
    operatorSpan.append(b);
    upperEquation.appendChild(operatorSpan);      
    lowerOperator.textContent = '';
    }
    
    
    upperEquation.appendChild(operatorSpan);
    
    countNumbers = 0;
    currentInput = '';
    lowerOperator.textContent = '';

    }

    else {

        if(hadResult == true){

            operator = a;
            countNumbers = 0;
            gotFirstNum = true;
            gotSecondNum = false;
            lowerOperator.textContent = ' ';
            upperEquation.textContent = firstNum + " ";
            if(b == undefined){
                operatorSpan.textContent = operator + " ";
            upperEquation.appendChild(operatorSpan);
            }
            else {
                operatorSpan.removeChild(operatorSpan.firstChild);
            operatorSpan.appendChild(b);

        if(upperEquation.querySelector("span") !== null){
            
        }
        else {
            upperEquation.appendChild(operatorSpan);
        }
            }
            

        
        
        
    
    
    }

    }

    }

}

function appendResult(a){

    if(firstNum.toString().length > 8){

        lowerOperator.textContent = firstNum.toString().slice(0, 9);

    }

    else {

        lowerOperator.textContent = firstNum;

    }
    
   
    if (upperEquation.querySelector("span") !== null){

        upperEquation.removeChild(upperEquation.firstChild);
        upperEquation.removeChild(upperEquation.lastChild);
        upperEquation.appendChild(operatorSpan);
        operatorSpan.before(a + " ");
        operatorSpan.after(" " + secondNum);
    }

    else {
        
        upperEquation.textContent += a + " ";
        upperEquation.appendChild(operatorSpan);
        operatorSpan.after(" " + secondNum);

    }
}