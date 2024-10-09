// Get the navbar element
const navbar = document.getElementById('navbar');

// Add an event listener for scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        // When the page is scrolled down 50px, add the 'scrolled' class
        navbar.classList.add('scrolled');
    } else {
        // When at the top of the page, remove the 'scrolled' class
        navbar.classList.remove('scrolled');
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    // Ensure index is within bounds
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Hide all slides and remove 'active' class
    slides.forEach(slide => slide.classList.remove('active'));

    // Show the current slide
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);


let slideIndex = 0;
const imageFrames = document.querySelectorAll('.image-frame');
const totalImageFrames = imageFrames.length;

// Function to update the image scroll
function updateImageScroll() {
  const frameWidth = imageFrames[0].clientWidth;
  document.querySelector('.image-scroll-box').style.transform = `translateX(-${slideIndex * frameWidth}px)`;
}

// Auto-scroll images every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalImageFrames;
  updateImageScroll();
}, 7000);



