// Trying to call the function before it's declared
try {
    console.log(multiplyNumbers(5, 3));
} catch (e) {
    console.log("Error: " + e.message);
}

// Defining the function expression
const multiplyNumbers = function(a, b) {
    return a * b;
};

// Calling the function after it's declared
console.log(multiplyNumbers(5, 3)); // Outputs: 15
