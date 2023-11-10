//This is the picture Slideshow js
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < 9; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//end slidshow js

// Menu expanding js
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.menu-images-container img');

  images.forEach(img => {
    img.addEventListener('click', function () {
      // Check if the screen width is less than or equal to 768px (typical mobile width)
      const isMobile = window.innerWidth <= 768;

      // Toggle the 'expanded' class only on mobile
      if (isMobile) {
        this.classList.toggle('expanded');
      }
    });
  });
});