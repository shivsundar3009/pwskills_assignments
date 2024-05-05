function manipulateString(inputString) {
    // Convert the characters to uppercase
    const manipulatedString = inputString.toUpperCase();

    // Define the callback function
    function logString() {
        console.log("The manipulated string is: " + manipulatedString);
    }

    // Return the callback function
    return logString;
}

// Example usage:
const input = "Hello, World!";
const callback = manipulateString(input);
callback(); // This will log "The manipulated string is: HELLO, WORLD!"
