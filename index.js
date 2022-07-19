let myCart = document.querySelector("#myCart");

document.querySelector("#myCart-btn").onclick = () => {
  myCart.classList.toggle("active");
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

var swiper = new Swiper(".menuSwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 2500);
}

window.onload = fadeOut();