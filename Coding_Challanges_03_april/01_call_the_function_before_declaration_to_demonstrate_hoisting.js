// Trying to call the function before its declaration will result in an error
// console.log(addNumbers(5, 3)); // Uncaught ReferenceError: Cannot access 'addNumbers' before initialization

// Function expression
const addNumbers = function(a, b) {
    return a + b;
  };
  
  // Now calling the function after its declaration will work
  console.log(addNumbers(5, 3)); // Output will be 8
  