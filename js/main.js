const $header = document.querySelector('.header');
const $headerMenu = $header.querySelector('.header__menu');
const $menuToggle = $header.querySelector('.menu__toggle');

$menuToggle.addEventListener('click', () => {
  $headerMenu.classList.toggle('menu_active');
  document.body.classList.toggle('body_lock');  
});

const $menuLinks = $headerMenu.querySelectorAll('.menu__link');
$menuLinks.forEach($link => {
  $link.addEventListener('click', () => {
    $headerMenu.classList.toggle('menu_active');
  });
});