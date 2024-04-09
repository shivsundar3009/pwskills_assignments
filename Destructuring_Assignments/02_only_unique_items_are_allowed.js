function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
