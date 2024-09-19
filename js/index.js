const breedLink = document.getElementById('breedLink');
const imageLink = document.getElementById('imageLink');
const breedSection = document.getElementById('breedSection');
const imageSection = document.getElementById('imageSection');

fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(data => {
        const breedList = document.createElement('ul');
        breedSection.appendChild(breedList);

        data.forEach(breed => {
            const listItem = document.createElement('li');
            listItem.textContent = breed.name;
            breedList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching breeds:', error);
    });

// Fetch and display Random Cat Images
imageLink.addEventListener('click', function() {
    breedSection.style.display = 'none';
    imageSection.style.display = 'block';

    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
        .then(response => response.json())
        .then(images => {
            const catImagesDiv = document.getElementById('catImages');
            catImagesDiv.innerHTML = ''; // Clear previous images

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

// Navigation back to breeds
breedLink.addEventListener('click', function() {
    breedSection.style.display = 'block';
    imageSection.style.display = 'none';
});

//ToDo: add comments