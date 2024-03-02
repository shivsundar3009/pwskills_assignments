// Sample list of books with author names and publication years
const books = [
  { title: "Book 1", author: "author 1", publicationYear: 2005 },
  { title: "Book 2", author: "author 2", publicationYear: 2012 },
  { title: "Book 3", author: "author 3", publicationYear: 2008 },
  { title: "Book 4", author: "author 4", publicationYear: 2015 },
];

// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalizeAuthors(books) {
  return books
    .filter(book => book.publicationYear > 2010)
    .map(book => ({
      title: book.title,
      author: book.author.toUpperCase(),
      publicationYear: book.publicationYear
    }));
}

// Call the function with the sample list of books
const filteredBooks = filterAndCapitalizeAuthors(books);

// Output the filtered books
console.log(filteredBooks);
