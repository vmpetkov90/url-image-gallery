function addImage() {
    const urlInput = document.getElementById('img-url');
    const url = urlInput.value.trim();

    if (!url) return;

    const gallery = document.getElementById('gallery');

    // Create container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    // Create image
    const img = document.createElement('img');
    img.src = url;
    imgContainer.appendChild(img);

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', () => {
        imgContainer.remove();
    });

    imgContainer.appendChild(removeButton);
    gallery.appendChild(imgContainer);

    // Clear input
    urlInput.value = '';
}

document.getElementById('add-image').addEventListener('click', addImage);
