function sum(a, b) {
    console.log('Value of result before assignment:', result); // This will log 'undefined' due to hoisting
    var result = a + b;
    return result;
}

console.log(sum(3, 4)); // Output: 7
