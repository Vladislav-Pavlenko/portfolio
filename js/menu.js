document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const menu = document.getElementById("menu");

  openMenu.addEventListener("click", function () {
    menu.classList.add("is-open");

    // Додає або видаляє клас no-scroll в залежності від стану меню
    if (menu.classList.contains("is-open")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  closeMenu.addEventListener("click", function () {
    menu.classList.remove("is-open");

    // Додає або видаляє клас no-scroll в залежності від стану меню
    if (menu.classList.contains("is-open")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
});
