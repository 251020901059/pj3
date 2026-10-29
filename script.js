function upDate(image) {
  const displayTitle = document.getElementById("display-title");
  const displayDescription = document.getElementById("display-description");

  displayTitle.textContent = image.dataset.title;
  displayDescription.textContent = image.dataset.description;
}

function resetDisplay() {
  const displayTitle = document.getElementById("display-title");
  const displayDescription = document.getElementById("display-description");

  displayTitle.textContent = "Select a photograph";
  displayDescription.textContent = "Place your pointer over an image or focus it with the keyboard.";
}

function unDo() {
  const activeImage = document.querySelector("#gallery .gallery-image:hover, #gallery .gallery-image:focus");

  if (activeImage) {
    upDate(activeImage);
    return;
  }

  resetDisplay();
}

function addTabfocus() {
  console.log("Hàm addTabfocus đã được kích hoạt thành công!");
  const images = document.querySelectorAll("#gallery .gallery-image");

  for (let index = 0; index < images.length; index += 1) {
    images[index].setAttribute("tabindex", "0");
  }
}

window.onload = addTabfocus;
