const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu__toggle');
  $menuToggle.addEventListener('click', () => {
    $menu.classList.toggle('menu_active');
  });

  const $menuLinks = $menu.querySelectorAll('.menu__link');
  $menuLinks.forEach($link => {
    $link.addEventListener('click', () => {
      $menu.classList.toggle('menu_active');
    });
  });

  $menu.addEventListener('click', e => {
    if ($menu === e.target && $menu.classList.contains('menu_active')) {
      $menu.classList.remove('menu_active');
    }
  });
}

const $sidebar = document.querySelector('.sidebar');
if ($sidebar) {
  const $sidebarMobileBtn = $sidebar.querySelector('.sidebar__mobile-btn');
  $sidebarMobileBtn.addEventListener('click', () => {
    $sidebar.classList.toggle('sidebar_active');
  });

  $sidebar.addEventListener('click', e => {
    if ($sidebar === e.target && $sidebar.classList.contains('sidebar_active')) {
      $sidebar.classList.remove('sidebar_active');
    }
  });
}