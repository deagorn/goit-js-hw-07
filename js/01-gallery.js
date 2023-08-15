import { galleryItems } from './gallery-items.js';
// Change code below this line

// Creating a gallery 
const markup = galleryItems
  .map((items) => `<li class="gallery__item">
  <a class="gallery__link" href="${items.original}">
    <img
      class="gallery__image"
      src="${items.preview}"
      data-source="${items.original}"
      alt="${items.description}"
    />
  </a>
</li>`)
    .join("");

// Adding a gallery to HTML
const gallery = document.querySelector(".gallery");
gallery.innerHTML = markup;

// Creating a modal window when clicking on a picture
gallery.addEventListener("click", openingModaWindow);

function openingModaWindow(e) {
    // canceling the default behavior of the browser
    e.preventDefault();

    // checking the click on the picture
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    // creating a modal window
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}">
    `)
    instance.show()


    document.addEventListener("keydown", closeModal);

    function closeModal(e) {
        if (e.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeModal);
            }
    }
}

