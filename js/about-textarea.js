function printText() {
  const biography1 = document.getElementById("biography1");
  const interests1 = document.getElementById("interests1");
  const interests2 = document.getElementById("interests2");
  const education1 = document.getElementById("education1");
  const education2 = document.getElementById("education2");
  const textParagraph = document.getElementById("paragraph");
  const textPath = document.getElementById("path");
  const textPathSpan = document.getElementById("path-span");

  biography1.addEventListener("click", function () {
    textParagraph.textContent =
      "I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ bio";
  });

  interests1.addEventListener("click", function () {
    textParagraph.textContent = "interes1";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ interests";
  });

  interests2.addEventListener("click", function () {
    textParagraph.textContent = "interes2";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ interests";
  });

  education1.addEventListener("click", function () {
    textParagraph.textContent = "education1";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ education";
  });

  education2.addEventListener("click", function () {
    textParagraph.textContent = "education2";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ education";
  });
}

printText();

function openModal() {
  const openModal = document.getElementById("open-modal");
  const closeModal = document.getElementById("close-modal");
  const modal = document.getElementById("modal");

  openModal.addEventListener("click", function () {
    if (modal.style.display === "none") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

openModal();
