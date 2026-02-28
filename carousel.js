const images = Array.from(document.getElementsByClassName("carousel__img"));
const totalImages = images.length;
let currentImageIndex = 0;
let intervalId = null; 
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
      img.style.transform = `translateX(${(currentImageIndex + 1) * -100}%)`;
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
function startCarousel() {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(showNextImage, 5000);
}
function stopCarousel() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}
const carouselContainer = document.getElementById('carousel__container');

if (carouselContainer) {
  carouselContainer.addEventListener('mouseenter', function(e) {
    stopCarousel();
  });
  carouselContainer.addEventListener('mouseleave', function(e) {
    startCarousel();
  });
  const imgContainers = document.querySelectorAll('.img__container');
  imgContainers.forEach(container => {
    container.addEventListener('mouseenter', stopCarousel);
    container.addEventListener('mouseleave', startCarousel);
  });
} 
startCarousel();