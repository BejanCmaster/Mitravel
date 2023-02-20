import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);


const swiper1 = document.querySelector('.slider-container'),
  swiper2 = document.querySelector('.swiper-container'),
  playButtonsFirst = document.querySelectorAll('.main-slider__play');

let swiperSlider1 = new Swiper(swiper1, {
  centeredSlides: true,
  loop: true,
  spaceBetween: 105,
  slidesPerView: 'auto'
});

let swiperSlider2 = new Swiper(swiper2, {
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.btn-left',
    prevEl: '.btn-right',
  },
});

swiperSlider2.on('transitionEnd', function () {
  let videos = document.querySelectorAll('.first__slider video');
  videos.forEach((el) => {
    el.pause();
    el.currentTime = 0;
  });
  playButtonsFirst.forEach((el) => {
    el.style.display = 'block';
  });
});


playButtonsFirst.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
    video.play();
    e.currentTarget.style.display = 'none';
    setTimeout(() => {
      video.volume = 0.5;
    }, 1000);
  });
});
