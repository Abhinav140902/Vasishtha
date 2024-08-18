// $(document).ready(function() {
//     var itemWidth = $('.service-item').outerWidth(true);
//     var visibleItems = 3;
//     var totalItems = $('.service-item').length;
//     var trackWidth = itemWidth * totalItems;

//     $('.carousel-track').css('width', trackWidth + 'px');

//     var currentPosition = 0;

//     $('.next').click(function() {
//         if (currentPosition < (totalItems - visibleItems)) {
//             currentPosition++;
//             $('.carousel-track').css('transform', 'translateX(-' + currentPosition * itemWidth + 'px)');
//         }
//     });

//     $('.prev').click(function() {
//         if (currentPosition > 0) {
//             currentPosition--;
//             $('.carousel-track').css('transform', 'translateX(-' + currentPosition * itemWidth + 'px)');
//         }
//     });
// });

// Initialize the carousel with options
var carouselElement = document.getElementById('customCarousel');
var carousel = new bootstrap.Carousel(carouselElement, {
  interval: 3000,  // Change slide every 5 seconds
  ride: 'carousel', // Automatically cycle the carousel
  wrap: true        // Whether the carousel should cycle continuously
});

// Add event listeners for the custom controls (if you want custom functionality)
document.querySelector('.carousel-control-prev').addEventListener('click', function() {
  carousel.prev();  // Move to the previous item
});

document.querySelector('.carousel-control-next').addEventListener('click', function() {
  carousel.next();  // Move to the next item
});

// JavaScript to toggle the menu
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
});
