function openAboutList() {
  const aboutButton1 = document.getElementById("about-button1");
  const aboutList1 = document.getElementById("about-list1");
  const aboutIcon1 = document.getElementById("about-icon1");
  const aboutButton2 = document.getElementById("about-button2");
  const aboutList2 = document.getElementById("about-list2");
  const aboutIcon2 = document.getElementById("about-icon2");
  const aboutButton3 = document.getElementById("about-button3");
  const aboutList3 = document.getElementById("about-list3");
  const aboutIcon3 = document.getElementById("about-icon3");
  const aboutButton4 = document.getElementById("about-button4");
  const aboutList4 = document.getElementById("about-list4");
  const aboutIcon4 = document.getElementById("about-icon4");

  aboutButton1.addEventListener("click", function () {
    if (aboutList1.style.display === "none") {
      aboutList1.style.display = "flex";
      aboutIcon1.style.transform = "rotate(0deg)";
    } else {
      aboutList1.style.display = "none";
      aboutIcon1.style.transform = "rotate(-90deg)";
    }
  });

  aboutButton2.addEventListener("click", function () {
    if (aboutList2.style.display === "none") {
      aboutList2.style.display = "flex";
      aboutIcon2.style.transform = "rotate(0deg)";
    } else {
      aboutList2.style.display = "none";
      aboutIcon2.style.transform = "rotate(-90deg)";
    }
  });

  aboutButton3.addEventListener("click", function () {
    if (aboutList3.style.display === "none") {
      aboutList3.style.display = "flex";
      aboutIcon3.style.transform = "rotate(0deg)";
    } else {
      aboutList3.style.display = "none";
      aboutIcon3.style.transform = "rotate(-90deg)";
    }
  });

  aboutButton4.addEventListener("click", function () {
    if (aboutList4.style.display === "none") {
      aboutList4.style.display = "flex";
      aboutIcon4.style.transform = "rotate(0deg)";
    } else {
      aboutList4.style.display = "none";
      aboutIcon4.style.transform = "rotate(-90deg)";
    }
  });
}

openAboutList();

function openPersonalList() {
  const personalButton1 = document.getElementById("personal-button1");
  const personalList1 = document.getElementById("personal-list1");
  const personalIcon1 = document.getElementById("personal-icon1");
  const personalButton2 = document.getElementById("personal-button2");
  const personalList2 = document.getElementById("personal-list2");
  const personalIcon2 = document.getElementById("personal-icon2");
  const personalButton3 = document.getElementById("personal-button3");
  const personalList3 = document.getElementById("personal-list3");
  const personalIcon3 = document.getElementById("personal-icon3");

  personalButton1.addEventListener("click", function () {
    if (personalList1.style.display === "none") {
      personalList1.style.display = "flex";
      personalIcon1.style.transform = "rotate(90deg)";
    } else {
      personalList1.style.display = "none";
      personalIcon1.style.transform = "rotate(0deg)";
    }
  });

  personalButton2.addEventListener("click", function () {
    if (personalList2.style.display === "none") {
      personalList2.style.display = "flex";
      personalIcon2.style.transform = "rotate(90deg)";
    } else {
      personalList2.style.display = "none";
      personalIcon2.style.transform = "rotate(0deg)";
    }
  });

  personalButton3.addEventListener("click", function () {
    if (personalList3.style.display === "none") {
      personalList3.style.display = "flex";
      personalIcon3.style.transform = "rotate(90deg)";
    } else {
      personalList3.style.display = "none";
      personalIcon3.style.transform = "rotate(0deg)";
    }
  });
}

openPersonalList();
