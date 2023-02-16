import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.slider-container', {
  centeredSlides: true,
  loop: true,
  spaceBetween: 105,
  slidesPerView: 'auto'
});
