var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
/*   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
