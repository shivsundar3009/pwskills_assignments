function getPerson(personObj) {
    try {
        if (typeof personObj !== 'object' || !personObj.hasOwnProperty('name') || !personObj.hasOwnProperty('age')) {
            throw new Error('Invalid parameter type');
        }
        
        const { name, age } = personObj;
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}

// Example usage:
const validPerson = { name: 'John', age: 30 };
const invalidPerson = { age: 25 };

console.log(getPerson(validPerson)); // Output: Name: John, Age: 30
console.log(getPerson(invalidPerson)); // Output: Invalid parameter type
