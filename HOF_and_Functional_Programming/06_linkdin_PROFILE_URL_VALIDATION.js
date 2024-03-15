function validateLinkedInProfile(url) {
    // Regular expression pattern to match valid LinkedIn profile URLs
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{3,28}[a-zA-Z0-9]$/;

    if (pattern.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

// Test cases
validateLinkedInProfile("https://www.linkedin.com/in/johndoe123");
validateLinkedInProfile("https://www.linkedin.com/in/jane_doe");
validateLinkedInProfile("https://www.linkedin.com/in/sam-smith-123");
validateLinkedInProfile("https://www.linkedin.com/in/alex_456");
validateLinkedInProfile("https://www.linkedin.com/in/robert-john");
validateLinkedInProfile("https://www.linkedin.com/in/jenny"); // Too short
validateLinkedInProfile("https://www.linkedin.com/in/longusername12345678901234567890"); // Too long
validateLinkedInProfile("https://www.linkedin.com/johndoe"); // Missing 'in/'
validateLinkedInProfile("https://www.linkedin.com/in/john doe"); // Contains space
