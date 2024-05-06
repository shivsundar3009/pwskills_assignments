function ageInDays(person) {
    var fullName = person.firstName + ' ' + person.lastName;
    var ageInDays = person.age * 365;

    return function() {
        console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
    };
}

// Example usage:
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

var logAgeInDays = ageInDays(person);
logAgeInDays(); // Logs: "The person's full name is John Doe and their age in days is 10950."
