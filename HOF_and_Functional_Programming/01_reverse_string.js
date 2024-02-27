let input = "Hello, world!";

// Function to reverse the string after a delay
function reverseAfterDelay(inputString) {
  // Delay of 2 seconds
  setTimeout(function() {
    // Reversing the string
    let reversedString = inputString.split('').reverse().join('');
    // Printing the reversed string
    console.log(reversedString);
  }, 2000); // 2000 milliseconds = 2 seconds
}

// Calling the function with the input string
reverseAfterDelay(input);