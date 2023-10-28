import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", markup);

document.addEventListener("click", onClick);
function onClick(event) {
  if (event.target.className === "gallery__image") {
    event.preventDefault();
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`,
      {
        onShow: () => {
          document.addEventListener("keydown", escClick);
        },
        onClose: () => {
          document.removeEventListener("keydown", escClick);
        },
      }
    );
    instance.show();
    function escClick(event) {
      if (event.code === "Escape") {
        instance.close();
      }
    }
  }
}
