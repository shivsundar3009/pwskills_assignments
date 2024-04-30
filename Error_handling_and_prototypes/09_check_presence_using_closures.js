function numberChecker(numbers) {
    // Define a function inside numberChecker that has access to the numbers array
    return function(num) {
        // Check if the num is present in the numbers array
        return numbers.includes(num);
    };
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(numbersArray);

console.log(checkNumber(3)); // Output: true
console.log(checkNumber(6)); // Output: false
