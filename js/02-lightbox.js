import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}"
          alt="${description}" />
        </a>
      </li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  showCounter: false,
});
gallery.on("show.simplelightbox", function () {
  // do something…
});
