function doubleWithCallback(arr, callback) {
    // Initialize an empty array to store the doubled elements
    let doubledArr = [];
    
    // Iterate through the input array
    for (let i = 0; i < arr.length; i++) {
        // Use the callback function to double each element and push it to the new array
        doubledArr.push(callback(arr[i]));
    }
    
    // Return the new array with doubled elements
    return doubledArr;
}

// Example callback function to double a number
function double(num) {
    return num * 2;
}

// Test the function
let inputArray = [1, 2, 3, 4, 5];
let doubledArray = doubleWithCallback(inputArray, double);
console.log(doubledArray); // Output will be [2, 4, 6, 8, 10]
