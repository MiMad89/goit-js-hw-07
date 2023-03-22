import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((img) => {
  galleryEl.insertAdjacentHTML(
    "afterbegin",
    `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "src",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);
