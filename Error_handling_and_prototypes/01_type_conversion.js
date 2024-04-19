function convertToNumber(str) {
    try {
        const num = Number(str);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        return num;
    } catch (error) {
        return "Invalid number";
    }
}

// Example usage:
console.log(convertToNumber("123")); // Output: 123
console.log(convertToNumber("3.14")); // Output: 3.14
console.log(convertToNumber("hello")); // Output: Invalid number
