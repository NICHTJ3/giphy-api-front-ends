import API from "./API.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");

loadingImage.style.display = "none";

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;

  searchStart();
  API.search(searchTerm)
    .then(displayImages)
    .then(() => {
      loadingImage.style.display = "none";
    });
}

function searchStart() {
  loadingImage.style.display = "";
  imageSection.innerHTML = "";
}

function displayImages(images) {
  images.forEach(image => {
    const imageElement = document.createElement("img");
    imageElement.src = image.images.downsized_large.url;
    imageElement.alt = image.name;
    imageSection.appendChild(imageElement);
  });
}
