function findMinMax(array) {
  // Using the spread operator to pass array elements as arguments to Math.max() and Math.min()
  const max = Math.max(...array);
  const min = Math.min(...array);

  // Returning an object with max and min properties
  return { max, min };
}

// Example usage:
const numbers = [5, 2, 7, 1, 9];
const result = findMinMax(numbers);
console.log(result); // Output: { max: 9, min: 1 }
