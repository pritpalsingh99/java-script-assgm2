// Function to display a quote
function displayQuote(quote, author) {
    console.log(`"${quote}" - ${author}`);
}

// Function to convert inches to centimeters
function convertLength(inches) {
    return inches * 2.54; // 1 inch = 2.54 cm
}

// Function to calculate the standard deviation
function calculateStandardDeviation(numbers) {
    const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numbers.length;
    return Math.sqrt(variance);
}


// Function to calculate the tip
function calculateTip(billAmount, tipPercentage) {
    const tip = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tip;
    return { tip, totalAmount };
}

// Exporting the functions
module.exports = {
    displayQuote,
    convertLength,
    calculateStandardDeviation,
    calculateTip,
};
