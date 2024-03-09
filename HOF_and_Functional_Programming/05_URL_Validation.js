function validateURL(url) {
    // Regular expression pattern
    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+$/;

    // Test the URL against the regex pattern
    if (regex.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}

// Test cases
validateURL("http://example.com"); // Valid URL
validateURL("https://example.com"); // Valid URL
validateURL("ftp://example.com"); // Invalid URL
validateURL("http://example"); // Invalid URL
validateURL("https://example"); // Invalid URL
