document.addEventListener("DOMContentLoaded", setActive());

function setActive() {
    if (document.getElementById("title").textContent === "Home Page") {
        document.getElementById("home").className += " active";
    } else if (document.getElementById("title").textContent === "Books") {
        document.getElementById("books").className += " active";
    } else if (document.getElementById("title").textContent === "Board Games") {
        document.getElementById("board-games").className += " active";
    } else if (document.getElementById("title").textContent === "Painting") {
        document.getElementById("painting").className += " active";
    }
}

var slideIndex = 0;
autoShowSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activeDot";
}

function autoShowSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(autoShowSlides, 10000);
}

function picFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.textContent = imgs.alt;
    expandImg.parentElement.style.display = "block";
}