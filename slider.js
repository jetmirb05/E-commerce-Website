let currentSlide = 0;
const slides = document.querySelectorAll("#slider .slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

function updateSlidePosition() {
    for (let slide of slides) {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    setActiveDot();
}

function setActiveDot() {
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentSlide ? '#ffffff' : '#bbb';
    });
}

function moveToSlide(n) {
    currentSlide = n - 1;
    updateSlidePosition();
}

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
}

document.getElementById("next").addEventListener("click", moveToNextSlide);
document.getElementById("prev").addEventListener("click", moveToPrevSlide);

// Initialize the first dot as active
setActiveDot();
