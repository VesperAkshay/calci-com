// test.js

const calculator = require('../src/calculator');

// Arithmetic Operations
console.log("Addition:", calculator.add(5, 3)); // Should print 8
console.log("Subtraction:", calculator.subtract(10, 4)); // Should print 6
console.log("Multiplication:", calculator.multiply(2, 6)); // Should print 12
console.log("Division:", calculator.divide(10, 2)); // Should print 5

// Basic Functions
console.log("Exponentiation:", calculator.power(2, 3)); // Should print 8
console.log("Square Root:", calculator.squareRoot(16)); // Should print 4
console.log("Percentage:", calculator.percentage(50, 20)); // Should print 10
console.log("Absolute Value:", calculator.absolute(-5)); // Should print 5
console.log("Factorial:", calculator.factorial(5)); // Should print 120
console.log("Rounding:", calculator.round(3.14159, 2)); // Should print 3.14
console.log("Natural Logarithm:", calculator.naturalLogarithm(10)); // Should print ~2.303
console.log("Logarithm Base 10:", calculator.logarithmBase10(100)); // Should print 2

// Trigonometric Functions
console.log("Sine:", calculator.sine(Math.PI / 6)); // Should print 0.5
console.log("Cosine:", calculator.cosine(Math.PI / 3)); // Should print 0.5
console.log("Tangent:", calculator.tangent(Math.PI / 4)); // Should print 1
console.log("Arcsine:", calculator.arcsine(0.5)); // Should print ~0.524
console.log("Arccosine:", calculator.arccosine(0.5)); // Should print ~1.047
console.log("Arctangent:", calculator.arctangent(1)); // Should print ~0.785

// Hyperbolic Functions
console.log("Hyperbolic Sine:", calculator.sinh(0)); // Should print 0
console.log("Hyperbolic Cosine:", calculator.cosh(0)); // Should print 1
console.log("Hyperbolic Tangent:", calculator.tanh(0)); // Should print 0

// Unit Conversion
console.log("Celsius to Fahrenheit:", calculator.celsiusToFahrenheit(0)); // Should print 32
console.log("Fahrenheit to Celsius:", calculator.fahrenheitToCelsius(32)); // Should print 0
console.log("Meters to Feet:", calculator.metersToFeet(1)); // Should print ~3.28084
console.log("Feet to Meters:", calculator.feetToMeters(3.28084)); // Should print 1
console.log("Kilograms to Pounds:", calculator.kilogramsToPounds(1)); // Should print ~2.20462
console.log("Pounds to Kilograms:", calculator.poundsToKilograms(2.20462)); // Should print 1

// Geometry Calculations
console.log("Square Area:", calculator.squareArea(5)); // Should print 25
console.log("Square Perimeter:", calculator.squarePerimeter(5)); // Should print 20
console.log("Rectangle Area:", calculator.rectangleArea(4, 6)); // Should print 24
console.log("Rectangle Perimeter:", calculator.rectanglePerimeter(4, 6)); // Should print 20
console.log("Circle Area:", calculator.circleArea(3)); // Should print ~28.274
console.log("Circle Circumference:", calculator.circleCircumference(3)); // Should print ~18.85

// Date and Time Operations
console.log("Days Difference:", calculator.daysDifference('2024-03-27', '2024-04-02')); // Should print 6
console.log("Add Days:", calculator.addDays('2024-03-27', 5)); // Should print '2024-04-01'
console.log("Subtract Days:", calculator.subtractDays('2024-03-27', 5)); // Should print '2024-03-22'

console.log("Compound Interest:", calculator.compoundInterest(1000, 0.05, 5)); // Example output: Should print 1276.2815625000003
console.log("Annuity:", calculator.annuity(100, 0.05, 5)); // Example output: Should print 552.5072142594243
console.log("Loan Amortization:", calculator.loanAmortization(100000, 5, 30)); // Example output: Should print 536.8211638864727
console.log("Future Value:", calculator.futureValue(1000, 0.05, 5)); // Example output: Should print 1276.2815625000003
console.log("Present Value:", calculator.presentValue(1276.2815625000003, 0.05, 5)); // Example output: Should print 1000

// Statistics functions
console.log("Mean:", calculator.mean([1, 2, 3, 4, 5])); // Example output: Should print 3
console.log("Median:", calculator.median([1, 2, 3, 4, 5])); // Example output: Should print 3
