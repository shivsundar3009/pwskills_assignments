function logTitlesAlphabetically(books, callback) {
    // Extract titles using map
    const titles = books.map(book => book.title);

    // Sort titles alphabetically
    titles.sort();

    // Pass sorted titles to the callback function
    callback(titles);
}

// Example callback function to log titles to the console
function logTitles(titles) {
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
}

// Example list of book objects
const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// Call the function with the list of books and the callback function
logTitlesAlphabetically(books, logTitles);
