let slideIndex = 1;

let slides = document.getElementsByClassName("mySlides");
let captions = document.getElementsByClassName("caption-container");
let previews = document.getElementsByClassName("column");
let selection = document.getElementById("folder").value;

for (i = 0; i < previews.length; i++) {
  if (previews[i].id != selection) {
    previews[i].style.display = "none";
  } else {
    previews[i].style.display = "block";
  }
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let selection = document.getElementById("folder").value;
  let i;
  let currentSlides = [];
  let currentCaptions = [];

  for (i = 0; i < slides.length; i++) {
    if (slides[i].id == selection) {
      currentSlides.push(slides[i]);
    }
    if (captions[i].id == selection) {
      currentCaptions.push(captions[i]);
    }
  }

  if (n > currentSlides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = currentSlides.length}

  for (i = 0; i < currentSlides.length; i++) {
    currentSlides[i].style.display = "none";
    currentCaptions[i].style.display = "none";
  }
  
  currentSlides[slideIndex-1].style.display = "block";
  currentCaptions[slideIndex-1].style.display = "block";
}

function switchSlides() {

  let currentSlides = [];
  let currentCaptions = [];

  let selection = document.getElementById("folder").value;
  let containers = document.getElementsByClassName("container");

  for (i = 0; i < slides.length; i++) {
    if (slides[i].id == selection) {
      currentSlides.push(slides[i]);
    }
    if (captions[i].id == selection) {
      currentCaptions.push(captions[i]);
    }
  }
  
  for (i = 0; i < containers.length; i++) {
    if (containers[i].id != selection) {
      containers[i].style.display = "none";
      for (j = 0; j < containers[i].children.length; j++) {
        containers[i].children[j].style.display = "none";
      }
    } else {
      containers[i].style.display = "block";
      containers[i].children[0].style.display = "block";
      currentCaptions[slideIndex-1].style.display = "block";
      slideIndex = 1;
    }
  }

  for (i = 0; i < previews.length; i++) {
    if (previews[i].id != selection) {
      previews[i].style.display = "none";
    } else {
      previews[i].style.display = "block";
    }
  }
}