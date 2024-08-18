
var carouselElement = document.getElementById('customCarousel');
var carousel = new bootstrap.Carousel(carouselElement, {
  interval: 3000,
  ride: 'carousel',
  wrap: true
});


document.querySelector('.carousel-control-prev').addEventListener('click', function() {
  carousel.prev();
});

document.querySelector('.carousel-control-next').addEventListener('click', function() {
  carousel.next();
});

document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
});
