"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the built-in 'readline' module for user input
var readline = require("readline");
// Implement the Calculator interface
var calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return (b === 0 ? NaN : a / b); },
};
// Create a function to perform calculations based on user input
function performCalculation(operator, num1, num2) {
    switch (operator) {
        case '+':
            return calculator.add(num1, num2);
        case '-':
            return calculator.subtract(num1, num2);
        case '*':
            return calculator.multiply(num1, num2);
        case '/':
            return calculator.divide(num1, num2);
        default:
            return 'Invalid operator';
    }
}
// Create a function to read user input and perform calculations
function startCalculator() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the first number: ', function (num1) {
        rl.question('Enter the operator (+, -, *, /): ', function (operator) {
            rl.question('Enter the second number: ', function (num2) {
                var result = performCalculation(operator, parseFloat(num1), parseFloat(num2));
                console.log("Result: ".concat(result));
                rl.close();
            });
        });
    });
}
// Start the calculator
startCalculator();
