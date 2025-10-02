const DESCRIPTIONS = ["Fieldhouse", "Mountain", "Night Sky", "Path", "Stonewater", "Woods"];
const IMAGES = ["Images/fieldhouse.jpg", "Images/mountain.jpg", "Images/nightsky.jpg", "Images/path.jpg", "Images/stonewater.jpg", "Images/woods.jpg"];
const NRIMAGES = IMAGES.length;

createSlides();
let slideIndex = 1;
showSlides(slideIndex);

function createSlides() {
  let container = document.getElementsByClassName("container");

  for (let i = 0; i < NRIMAGES; i++) {
    
    let slideDiv = document.createElement("div");
    slideDiv.setAttribute("class","mySlides");

    let numberDiv = document.createElement("div");
    numberDiv.setAttribute("class", "numbertext");
    let number = document.createTextNode("NUMBER", (i + 1) + " / " + NRIMAGES);
    numberDiv.appendChild(number);

    let image = document.createElement("img");
    image.setAttribute("src", IMAGES[i]);

    let textDiv = document.createElement("div");
    textDiv.setAttribute("class","text");
    let text = document.createTextNode(DESCRIPTIONS[i]);
    textDiv.appendChild(text);

    container[0].appendChild(slideDiv);
    slideDiv.appendChild(numberDiv);
    slideDiv.appendChild(image);
    slideDiv.appendChild(textDiv);
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}