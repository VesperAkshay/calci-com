// calculator.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(number) {
    if (number < 0) {
        throw new Error("Square root of negative number is undefined");
    }
    return Math.sqrt(number);
}

function percentage(number, percent) {
    return (number * percent) / 100;
}

function absolute(number) {
    return Math.abs(number);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function round(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
}

function naturalLogarithm(number) {
    return Math.log(number);
}

function logarithmBase10(number) {
    return Math.log10(number);
}

function sine(angleInRadians) {
    return Math.sin(angleInRadians);
}

function cosine(angleInRadians) {
    return Math.cos(angleInRadians);
}

function tangent(angleInRadians) {
    return Math.tan(angleInRadians);
}

function arcsine(value) {
    return Math.asin(value);
}

function arccosine(value) {
    return Math.acos(value);
}

function arctangent(value) {
    return Math.atan(value);
}

function sinh(value) {
    return Math.sinh(value);
}

function cosh(value) {
    return Math.cosh(value);
}

function tanh(value) {
    return Math.tanh(value);
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function metersToFeet(meters) {
    return meters * 3.28084;
}

function feetToMeters(feet) {
    return feet / 3.28084;
}

function kilogramsToPounds(kilograms) {
    return kilograms * 2.20462;
}

function poundsToKilograms(pounds) {
    return pounds / 2.20462;
}

// Geometry Calculations
function squareArea(side) {
    return side * side;
}

function squarePerimeter(side) {
    return 4 * side;
}

function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Date and Time Operations
function daysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
}

function subtractDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
}

function compoundInterest(principal, rate, time) {
    return principal * Math.pow(1 + rate, time);
}

function annuity(payment, rate, time) {
    return payment * ((1 - Math.pow(1 + rate, -time)) / rate);
}

function loanAmortization(loanAmount, annualInterestRate, loanTermInYears) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfPayments = loanTermInYears * 12;
    const discountFactor = (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) /
                           (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments));
    const monthlyPayment = loanAmount / discountFactor;
    return monthlyPayment;
}

function futureValue(initialInvestment, annualInterestRate, time) {
    return initialInvestment * Math.pow(1 + annualInterestRate, time);
}

function presentValue(futureValue, annualInterestRate, time) {
    return futureValue / Math.pow(1 + annualInterestRate, time);
}

// Statistics functions
function mean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

function median(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
}

// Matrix operations
function matrixAddition(matrix1, matrix2) {
    // Implement matrix addition
}

function matrixSubtraction(matrix1, matrix2) {
    // Implement matrix subtraction
}

function matrixMultiplication(matrix1, matrix2) {
    // Implement matrix multiplication
}

function determinant(matrix) {
    // Implement determinant calculation
}

function inverse(matrix) {
    // Implement inverse calculation
}

function transpose(matrix) {
    // Implement matrix transpose
}

// Random number generation
function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    squareRoot,
    percentage,
    absolute,
    factorial,
    round,
    naturalLogarithm,
    logarithmBase10,
    sine,
    cosine,
    tangent,
    arcsine,
    arccosine,
    arctangent,
    sinh,
    cosh,
    tanh,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    metersToFeet,
    feetToMeters,
    kilogramsToPounds,
    poundsToKilograms,
    squareArea,
    squarePerimeter,
    rectangleArea,
    rectanglePerimeter,
    circleArea,
    circleCircumference,
    daysDifference,
    addDays,
    subtractDays,
    compoundInterest,
    annuity,
    loanAmortization,
    futureValue,
    presentValue,
    // Statistics functions
    mean,
    median,
    // Matrix operations
    matrixAddition,
    matrixSubtraction,
    matrixMultiplication,
    determinant,
    inverse,
    transpose,
    // Random number generation
    generateRandomNumber,
    generateRandomInt
};
