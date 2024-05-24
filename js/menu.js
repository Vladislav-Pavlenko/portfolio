document.addEventListener("DOMContentLoaded", function () {
  const openBtnEl = document.querySelector("#open-btn-js");
  const closeMenuEl = document.querySelector("#close-btn-js");
  const menuEL = document.querySelector("#menu-js");

  openBtnEl.addEventListener("click", function () {
    menuEL.classList.add("is-open");
    if (menuEL.classList.contains("is-open")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  closeMenuEl.addEventListener("click", function () {
    menuEL.classList.remove("is-open");
    if (menuEL.classList.contains("is-open")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
});
