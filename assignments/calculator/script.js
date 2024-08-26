

const readlineSync = require("readline-sync");

//A function that adds two numbers and returns the result
//- Each function will have 2 parameters, `num1`, `num2`
function add(num1, num2){
     return(num1 + num2);
}

//A function that multiplies two numbers and returns the result
//- Each function will have 2 parameters, `num1`, `num2`
function mul(num1, num2){
     return(num1 * num2);
}

//A function that divides two numbers and returns the result
//- Each function will have 2 parameters, `num1`, `num2`
function div(num1, num2){
     return(num1 / num2);
}

//A function that subtracts two numbers and returns the result
//- Each function will have 2 parameters, `num1`, `num2`
function sub(num1, num2){
     return(num1 - num2);
}

/*
- On the console the prompt will print to the user:
- *Please enter your first number* (store that number)
- *Please enter your second number* (store that number)
- *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
*/
const num1 = Number(readlineSync.question("Please enter your first number: "));
console.log(num1)
const num2 = Number(readlineSync.question("Please enter your second number: "))
console.log(num2)
const operation = (readlineSync.question("please enter the operation to perform: add, sub, mul, div: "))
console.log(operation)

/*
- Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
- You will then print to the console: *The result is: [the result]*
*/
let result;
if (operation === "add"){
     result = add(num1, num2);
} else if (operation === "sub"){
     result = sub(num1, num2);
} else if (operation === "mul"){
     result = mul(num1, num2);
} else if (operation === " div"){
     result = div(num1, num2);
} else {
     result = "Please try again"
}

console.log("The result is " + result);