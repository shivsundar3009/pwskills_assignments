class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}

// Instantiate the Calculator class (not required in JavaScript)
// const calculator = new Calculator();

// Call the add method
const result = Calculator.add(5, 3);
console.log("Result:", result); // Output: Result: 8
