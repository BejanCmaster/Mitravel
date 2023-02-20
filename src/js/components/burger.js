const burger = document.querySelector('.burger'),
  close = document.querySelector('.menu__close'),
  menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu--visible');
});
