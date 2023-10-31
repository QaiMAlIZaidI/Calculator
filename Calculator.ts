// Import the built-in 'readline' module for user input
import * as readline from 'readline';

// Create an interface for the calculator operations
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}

// Implement the Calculator interface
const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b === 0 ? NaN : a / b),
};

// Create a function to perform calculations based on user input
function performCalculation(operator: string, num1: number, num2: number): number | string {
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
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            rl.question('Enter the second number: ', (num2) => {
                const result = performCalculation(operator, parseFloat(num1), parseFloat(num2));
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

// Start the calculator
startCalculator();
