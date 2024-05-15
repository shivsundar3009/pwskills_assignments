// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Check if response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse response as JSON
    return response.json();
  })
  .then(data => {
    // Log the data to the console
    console.log(data);
  })
  .catch(error => {
    // Log any errors to the console
    console.error('There was a problem fetching the data:', error);
  });
