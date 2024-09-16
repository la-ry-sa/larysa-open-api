fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data', error)
    });