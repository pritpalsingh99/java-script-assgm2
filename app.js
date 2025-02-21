// Import the functions from utilities.js
const { displayQuote, convertLength, calculateStandardDeviation, calculateFibonacci, calculateTip } = require('./utilities');

// quote 
displayQuote("The only limit to our realization of tomorrow is our doubts of today.", "Franklin D. Roosevelt");

// Length conversion 
const lengthInInches = 10; // Example length in inches
const lengthInCm = convertLength(lengthInInches);
console.log(`${lengthInInches} inches is equal to ${lengthInCm.toFixed(2)} centimeters.`);

// Standard deviation calculation
const numbers = [10, 25, 3, 8, 30];
const stdDev = calculateStandardDeviation(numbers);
console.log(`The standard deviation of the numbers is: ${stdDev.toFixed(2)}`);


// Tip calculation 
const billAmount = 50; // Example bill amount
const tipPercentage = 15; // Example tip percentage
const { tip, totalAmount } = calculateTip(billAmount, tipPercentage);
console.log(`For a bill of $${billAmount}, a ${tipPercentage}% tip would be $${tip.toFixed(2)}, making the total amount $${totalAmount.toFixed(2)}.`);
