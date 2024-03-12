// (() => {
//   const mobileMenu = document.querySelector(".js-menu-container");
//   const openMenuBtn = document.querySelector(".js-open-menu");
//   const closeMenuBtn = document.querySelector(".js-close-menu");
//   const closeMenuLink = document.querySelectorAll(".mob-menu-link");

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     mobileMenu.classList.toggle("is-open");

//     const scrollLockMethod = !isMenuOpen
//       ? "disableBodyScroll"
//       : "enableBodyScroll";
//     bodyScrollLock[scrollLockMethod](document.body);
//   };
//   closeMenuLink.forEach((item) => item.addEventListener("click", toggleMenu));
//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove("is-open");
//     openMenuBtn.setAttribute("aria-expanded", false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();

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
