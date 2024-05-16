// Function to handle errors
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// Function to fetch data from the API
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
        // Store response data
        const responseData = data;
        // Display data
        console.log(responseData);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error.message);
    });
}

// Call the fetchData function
fetchData();
