function generateRandomNumberWithDelay(delayInSeconds) {
    // Display progress messages every second
    let remainingTime = delayInSeconds;
    const countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`${remainingTime} seconds remaining...`);
            remainingTime--;
        } else {
            clearInterval(countdownInterval);
        }
    }, 1000);

    // Generate random number after delay
    setTimeout(() => {
        clearInterval(countdownInterval);
        const randomNumber = Math.floor(Math.random() * 100); // Modify as needed
        console.log(`Random number generated: ${randomNumber}`);
    }, ((delayInSeconds * 1000) + 1000));
}

// Change delayInSeconds to modify the delay
const delayInSeconds = 3;
generateRandomNumberWithDelay(delayInSeconds);
