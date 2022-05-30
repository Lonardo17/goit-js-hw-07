import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector(".gallery");

function createImg(el) {
    const step = el.map(({ preview, original, description }) => { 
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("")
    return step
}

gallery.insertAdjacentHTML("afterbegin", createImg(galleryItems));

 
let galleryLightbox = new SimpleLightbox(".gallery a",
  {
    
    captionsData: "alt",
    captionDelay: 250,
  });
  
