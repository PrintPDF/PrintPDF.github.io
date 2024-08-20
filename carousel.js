const images = Array.from(document.getElementsByClassName("carousel__img"));
const totalImages = images.length;

let currentImageIndex = 0;

function addTransitionEffectToImages() {
  images.forEach((img) => {
    img.style.transition = "transform 1s ease";
  });
}

function showNextImage() {
  if (currentImageIndex == totalImages - 1) {
    showPrevImage();
  } else {
    if (currentImageIndex === 0) addTransitionEffectToImages();
    images.forEach((img) => {
      img.style.transform = `translate(${(currentImageIndex + 1) * -100}%)`;
    });
    currentImageIndex++;
  }
}

function showPrevImage() {
  if (currentImageIndex === 0) return;
  images.forEach((img) => {
    img.style.transform = `translateX(${(currentImageIndex - 1) * -100}%)`;
  });
  currentImageIndex--;
}
setInterval(showNextImage, 5000);
