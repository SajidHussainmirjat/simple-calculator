#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "firstNumber" },
    { message: "Enter the second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operatos to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Increment", "Decrement"]
    }
]);
if (answer.operator === "Addition") {
    console.log(" Sum of the digits is ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(" Subtraction of two digits is ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(" Multiplication of two digits is ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Devision") {
    console.log(" Division of two digits is ", answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponentiation") {
    console.log(" Exponentiation of two digits is ", answer.firstNumber ** answer.secondNumber);
}
// else if (answer.operator === "Increment") {
//     console.log(" Increment of two digits is " ,answer.firstNumber++ +answer.secondNumber++)
// }
// else if (answer.operator === "Decrement") {
//     console.log(" Decrement of two digits is " ,answer.firstNumber-- -answer.secondNumber--)
// }
else {
    console.log("This is an invalid digit");
}
