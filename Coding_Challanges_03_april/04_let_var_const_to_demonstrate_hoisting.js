{
  // Attempt to log the values before they are declared
  try {
    console.log(a); // Will log 'undefined' due to var hoisting
  } catch (e) {
    console.log(e); // Won't execute
  }

  try {
    console.log(b); // Will throw a ReferenceError
  } catch (e) {
    console.log(e); // ReferenceError: Cannot access 'b' before initialization
  }

  try {
    console.log(c); // Will throw a ReferenceError
  } catch (e) {
    console.log(e); // ReferenceError: Cannot access 'c' before initialization
  }

  // Declare the variables
  var a = 10;
  let b = 20;
  const c = 30;

  // Log the values after they are declared
  console.log(a); // Will log 10
  console.log(b); // Will log 20
  console.log(c); // Will log 30
}
