// JavaScript code for animations and other functionalities

// Add smooth scrolling to navigation links
$(document).ready(function () {
  $('a.nav-link').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // Animate elements on scroll
  $(window).on('scroll', function () {
    $('.fade-in').each(function () {
      if (isElementInViewport($(this)) && !$(this).hasClass('visible')) {
        $(this).addClass('visible');
      }
    });
  });

  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    var rect = element[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Client review slider
  $('.review-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
$(document).ready(function () {
  // ... Existing code ...
