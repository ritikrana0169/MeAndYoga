const images = [
    './slide/sl1.png',
    './slide/sl2.png',
    './slide/sl5.png',
    './slide/demo.png' ,
    './slide/sl4.png',
    // Add more image URLs to the array as needed
];
let currentSlide = 0;
const sliderImage = document.getElementById('slider-image');

function showSlide(index) {
    currentSlide = (index + images.length) % images.length;

    // Remove the "active" class from all slides
    document.querySelectorAll('.slide').forEach((slide) => {
        slide.classList.remove('active');
    });

    // Add the "active" class to the current slide
    const currentSlideElement = document.querySelectorAll('.slide')[currentSlide];
    // currentSlideElement.classList.add('active');

    sliderImage.style.transform = 'scale(0.9)'; // Start with a slightly zoomed-in effect
    setTimeout(() => {
        sliderImage.src = images[currentSlide];
        sliderImage.style.transform = 'scale(1)'; // Apply full zoom (1)
    }, 500); // Adjust the duration of the zoom (in milliseconds) as needed
}

function autoSlide() {
    showSlide(currentSlide + 1); // Change to the next slide
}

// Start the autoSlide function when the window has finished loading
window.addEventListener('load', () => {
    // Set an interval to automatically change slides every 3 seconds (adjust as needed)
    const slideInterval = setInterval(autoSlide, 3000);

    // Initial slide
    showSlide(currentSlide);

    // Handle wrapping around to the first slide when reaching the end
    const lastSlideIndex = images.length - 1;
    setInterval(() => {
        if (currentSlide === lastSlideIndex) {
            showSlide(0);
        }
    }, 500); // Adjust the interval to match the autoSlide interval
});






// let currentSlide = 0;
// const sliderImage = document.getElementById('slider-image');

// function showSlide(index) {
//     currentSlide = (index + images.length) % images.length;
//     sliderImage.src = images[currentSlide];
// }

// function autoSlide() {
//     showSlide(currentSlide + 1); // Change to the next slide
// }

// // Start the autoSlide function when the window has finished loading
// window.addEventListener('load', () => {
//     showSlide(currentSlide);

//     // Set an interval to automatically change slides every 3 seconds (adjust as needed)
//     const slideInterval = setInterval(autoSlide, 3000);

//     // Clear the interval when the user interacts with the page
//     document.addEventListener('click', () => {
//         clearInterval(slideInterval);
//     });
// });
