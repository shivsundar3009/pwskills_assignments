// Create a prototype object called Student
function Student(name) {
  this.name = name;
}

// Add a method called printDetails to the prototype
Student.prototype.printDetails = function() {
  console.log("Hello, my name is " + this.name);
};

// Instantiate a Student object with the name "Mithun"
var mithun = new Student("Mithun");

// Call the printDetails method
mithun.printDetails();
