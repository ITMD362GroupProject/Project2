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
var images = document.querySelectorAll('.menu-images-container img');

// Add a click event listener to each image
images.forEach(function(img) {
  img.addEventListener('click', function() {
    // Toggle the 'expanded' class
    this.classList.toggle('expanded');
  });
});