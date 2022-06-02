const x =require("prompt-sync");
const prompt=x();

let cal = prompt('Enter calculation  + , - , * , /  : ');  
 
let num1 = parseFloat(prompt ('Enter the first number: '));  
let num2 = parseFloat(prompt ('Enter the second number: ')); 
let sum;   
// use in switch :
switch (cal) {
    case (cal == '+'):
         sum = num1 + num2; 
        break;
        case (cal == '-'):
            sum = num1 - num2; 
           break;
           case (cal == '*'):
            sum = num1 * num2; 
           break;   
           case (cal == '/'):
            sum = num1 / num2; 
           break;                   
    default:
        console.log("wroooooooooooong try again");
        break;
}

console.log(" the sun is : " + sum);