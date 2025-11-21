let slideIndex = 1;

let slides = document.getElementsByClassName("mySlides");
let captions = document.getElementsByClassName("caption-container");
let previews = document.getElementsByClassName("column");


showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    captions[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  captions[slideIndex-1].style.display = "block";
}

function switchSlides() {

  let currentSlides = [];
  let currentCaptions = [];

  let containers = document.getElementsByClassName("container");

  for (i = 0; i < slides.length; i++) {
    currentSlides.push(slides[i]);
    currentCaptions.push(captions[i]);
  }
  
  for (i = 0; i < containers.length; i++) {
    containers[i].style.display = "block";
    containers[i].children[0].style.display = "block";
    currentCaptions[slideIndex-1].style.display = "block";
    slideIndex = 1;
  }

  for (i = 0; i < previews.length; i++) {
      previews[i].style.display = "block";
  }
}