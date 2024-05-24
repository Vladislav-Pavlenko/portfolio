function openAboutList() {
  const personalBtnEl = document.querySelector("#personal-btn-js");
  const personalListEl = document.querySelector("#personal-list-js");
  const personalIconEl = document.querySelector("#personal-icon-js");
  const profBtnEl = document.querySelector("#prof-btn-js");
  const profListEl = document.querySelector("#prof-list-js");
  const profIconEl = document.querySelector("#prof-icon-js");
  const hobbyBtnEl = document.querySelector("#hobby-btn-js");
  const hobbyLsitEl = document.querySelector("#hobby-list-js");
  const hobbyIconEl = document.querySelector("#hobby-icon-js");
  const contactsBtnEl = document.querySelector("#contacts-btn-js");
  const contactsListEl = document.querySelector("#contacts-list-js");
  const contactsIconEl = document.querySelector("#contacts-icon-js");

  personalBtnEl.addEventListener("click", function () {
    if (personalListEl.style.display === "none") {
      personalListEl.style.display = "flex";
      personalIconEl.style.transform = "rotate(0deg)";
    } else {
      personalListEl.style.display = "none";
      personalIconEl.style.transform = "rotate(-90deg)";
    }
  });

  profBtnEl.addEventListener("click", function () {
    if (profListEl.style.display === "none") {
      profListEl.style.display = "flex";
      profIconEl.style.transform = "rotate(0deg)";
    } else {
      profListEl.style.display = "none";
      profIconEl.style.transform = "rotate(-90deg)";
    }
  });

  hobbyBtnEl.addEventListener("click", function () {
    if (hobbyLsitEl.style.display === "none") {
      hobbyLsitEl.style.display = "flex";
      hobbyIconEl.style.transform = "rotate(0deg)";
    } else {
      hobbyLsitEl.style.display = "none";
      hobbyIconEl.style.transform = "rotate(-90deg)";
    }
  });

  contactsBtnEl.addEventListener("click", function () {
    if (contactsListEl.style.display === "none") {
      contactsListEl.style.display = "flex";
      contactsIconEl.style.transform = "rotate(0deg)";
    } else {
      contactsListEl.style.display = "none";
      contactsIconEl.style.transform = "rotate(-90deg)";
    }
  });
}

openAboutList();

function openPersonalList() {
  const bioBtnEl = document.querySelector("#bio-btn-js");
  const bioListEl = document.querySelector("#bio-list-js");
  const bioIconEl = document.querySelector("#bio-icon-js");
  const ineteresBtnEl = document.querySelector("#interes-btn-js");
  const ineteresListEl = document.querySelector("#interes-list-js");
  const ineteresIconEl = document.querySelector("#interes-icon-js");
  const educBtnEl = document.querySelector("#educ-btn-js");
  const educListEl = document.querySelector("#educ-list-js");
  const educIconEl = document.querySelector("#educ-icon-js");

  bioBtnEl.addEventListener("click", function () {
    if (bioListEl.style.display === "none") {
      bioListEl.style.display = "flex";
      bioIconEl.style.transform = "rotate(90deg)";
    } else {
      bioListEl.style.display = "none";
      bioIconEl.style.transform = "rotate(0deg)";
    }
  });

  ineteresBtnEl.addEventListener("click", function () {
    if (ineteresListEl.style.display === "none") {
      ineteresListEl.style.display = "flex";
      ineteresIconEl.style.transform = "rotate(90deg)";
    } else {
      ineteresListEl.style.display = "none";
      ineteresIconEl.style.transform = "rotate(0deg)";
    }
  });

  educBtnEl.addEventListener("click", function () {
    if (educListEl.style.display === "none") {
      educListEl.style.display = "flex";
      educIconEl.style.transform = "rotate(90deg)";
    } else {
      educListEl.style.display = "none";
      educIconEl.style.transform = "rotate(0deg)";
    }
  });
}

openPersonalList();

function openProffesionalList() {
  const skillsBtnEl = document.querySelector("#skills-btn-js");
  const skillsListEl = document.querySelector("#skills-list-js");
  const skillsIconEl = document.querySelector("#skills-item-js");
  const resumeBtnEl = document.querySelector("#resume-btn-js");
  const resumeListEl = document.querySelector("#resume-list-js");
  const resumeIconEl = document.querySelector("#resume-icon-js");

  skillsBtnEl.addEventListener("click", function () {
    if (skillsListEl.style.display === "none") {
      skillsListEl.style.display = "flex";
      skillsIconEl.style.transform = "rotate(90deg)";
    } else {
      skillsListEl.style.display = "none";
      skillsIconEl.style.transform = "rotate(0deg)";
    }
  });

  resumeBtnEl.addEventListener("click", function () {
    if (resumeListEl.style.display === "none") {
      resumeListEl.style.display = "flex";
      resumeIconEl.style.transform = "rotate(90deg)";
    } else {
      resumeListEl.style.display = "none";
      resumeIconEl.style.transform = "rotate(0deg)";
    }
  });
}

openProffesionalList();
