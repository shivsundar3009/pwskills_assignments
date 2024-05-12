function greetWithPromise(name) {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string') {
      resolve(`Hello, ${name}!`);
    } else {
      reject(new Error('Input should be a string'));
    }
  });
}

// Example usage:
const name = "Mithun";
greetWithPromise(name)
  .then((greeting) => {
    console.log(greeting); // Output: Hello, Mithun!
  })
  .catch((error) => {
    console.error(error);
  });
