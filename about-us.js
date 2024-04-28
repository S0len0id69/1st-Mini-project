let slideIndex = 1;
showSlides(slideIndex);
setInterval(window.scrollBy(-100, 0), 100)
function plusSlides(n) {
    if (n === undefined) {
        n = 1;
    }
    showSlides(slideIndex += n);
}

function changeSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let cardsAtOnce = 3;
    let slides = document.getElementsByClassName("card");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length/cardsAtOnce) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length/cardsAtOnce }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for(i = 0; i < cardsAtOnce; i++) {
        slides[(slideIndex - 1) * 3 + i].style.display = "grid";
    }
    dots[slideIndex - 1].className += " active";
}