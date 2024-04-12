function swapValues(x, y) {
  x = x + y; // Add x and y and assign the result to x
  y = x - y; // Subtract y from the new value of x and assign it to y
  x = x - y; // Subtract the new value of y from the updated value of x and assign it to x
  // Now, x and y have swapped values
  return [x, y];
}

// Example usage
let x = 5;
let y = 10;
console.log("Before swapping: x =", x, "y =", y);
[x, y] = swapValues(x, y);
console.log("After swapping: x =", x, "y =", y);
