import { galleryItems } from './gallery-items.js';
// Change code below this line


// Creating a gallery 
const markup = galleryItems
    .map((items) => `<li class="gallery__item">
   <a class="gallery__link" href="${items.original}">
      <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
   </a>
</li>`)
    .join("");

// Adding a gallery to HTML
const gallery = document.querySelector(".gallery");
gallery.innerHTML = markup;


 // creating a modal window
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
     captionDelay: 250  });


