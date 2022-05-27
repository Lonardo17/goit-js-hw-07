import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector(".gallery");
function createImg(el) {
   const step = el.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("")
    return step
   }
gallery.insertAdjacentHTML("afterbegin", createImg(galleryItems))
gallery.addEventListener("click", selectedImg)

function selectedImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return }
    const dataAtr = event.target.dataset.source
    // modal(dataAtr)
    const massage = basicLightbox.create(`<img src="${dataAtr}">`)
massage.show()
}
// function modal(dataAtr){
// const massage = basicLightbox.create(`<img src="${dataAtr}">`)
// gallery.onclick = massage.show
// }

// const instance = basicLightbox.create(content)
