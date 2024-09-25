const breedLink = document.getElementById('breedLink'); // link for breed list
const imageLink = document.getElementById('imageLink'); // link for random images
const breedSection = document.getElementById('breedSection'); // section for breeds
const imageSection = document.getElementById('imageSection'); // section for images

// fetch and display cat breeds
fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(data => {
        const breedList = document.createElement('ul'); // create list 
        breedSection.appendChild(breedList); // append list to breed section

        // create list item for each breed
        data.forEach(breed => {
            const listItem = document.createElement('li');
            listItem.textContent = breed.name;
            breedList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching breeds:', error); // log possible errors
    });

// Fetch and display Random Cat Images when the link is clicked
imageLink.addEventListener('click', function() {
    breedSection.style.display = 'none';
    imageSection.style.display = 'block';

    // fetch 5 random cat images
    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
        .then(response => response.json())
        .then(images => {
            const catImagesDiv = document.getElementById('catImages'); // Get the div to contain images
            catImagesDiv.innerHTML = ''; // Clear previous images

            // create img element for each image
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.url;
                imgElement.alt = 'Random Cat';
                imgElement.style.width = '300px';
                catImagesDiv.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
});

// Go back to breeds if the link is clicked
breedLink.addEventListener('click', function() {
    breedSection.style.display = 'block';
    imageSection.style.display = 'none';
});