Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


const reviewSlider = new Swiper('.review-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },

  loop: true,

  navigation: {
    nextEl: '.review-slider__btn-next',
    prevEl: '.review-slider__btn-prev',
  },
});  