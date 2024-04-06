function wordCount(text) {
    const words = text.split(/\s+/); // Split the text into words
    const wordMap = new Map();

    // Count occurrences of each word
    words.forEach(word => {
        const cleanedWord = word.toLowerCase(); // Convert word to lowercase for case-insensitivity
        const count = wordMap.get(cleanedWord) || 0; // Get the current count or initialize to 0
        wordMap.set(cleanedWord, count + 1); // Increment the count for the word
    });

    return wordMap;
}

// Example usage:
const text = "This is a sample text. This text contains sample words.";
const counts = wordCount(text);

// Output the word counts
counts.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
