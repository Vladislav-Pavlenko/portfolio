function printText() {
  const biographyEl = document.querySelector("#biography-js");
  const interestsEL = document.querySelector("#programming-js");
  const collageEl = document.querySelector("#collage-js");
  const goitEl = document.querySelector("#goit-js");
  const softEl = document.querySelector("#soft-js");
  const techEl = document.querySelector("#tech-js");
  const swimmingEl = document.querySelector("#swimming-js");
  const gamingEl = document.querySelector("#swimming-js");
  const summaryLinkEl = document.querySelector("#summary-link-js");
  const resumeEl = document.querySelector("#resume-js");
  const paragraphEl = document.querySelector("#paragraph-js");
  const textPathEL = document.querySelector("#path-js");
  const textPathSpanEL = document.querySelector("#path-span-js");

  biographyEl.addEventListener("click", function () {
    paragraphEl.innerHTML = `First and last name: <br>  \u00A0 Vladyslav Pavlenko <br> 
      Place of residence: <br> \u00A0 Zboriv, Ukraine <br> <br>
      Education: <br> \u00A0 Student, VSP \u0022ZFK TNTU named after I. Pului\u0022,
      specialty \u0022Software Engineering\u0022  <br> <br>
      Experience: <br> GoIT \u0022Full-stack developer\u0022
      courses: <br> \u00B7 Having gained practical web development skills, I have acquired the skills
      of marking up web pages using HTML and CSS. <br> \u00B7 The ability to customize page elements
      using CSS styles and adherence to semantic markup. <br> \u00B7 Using the mobilfirst approach and
      responsive design to ensure optimal viewing on different devices. <br> \u00B7 Using the JavaScript
      programming language, as well as React and Node.js frameworks to create web application functionality. <br> <br>
      Skills: <br> \u00B7 Programming languages: JavaScript, Python (learning), <br> \u00B7 Frameworks: React, Node.js <br> \u00B7
      Confident user of CSS, HTML <br> <br> Personal qualities: <br> \u00B7
      Responsible and organized, able to work both independently and in a team.<br> \u00B7
      I have a desire to learn and develop in the field of programming. <br> <br> \u00A0 With these
      skills and attributes, I am eager to gain experience in your company and actively contribute to projects.`; /* prettier-ignore */
    textPathEL.textContent = "// personal-info";
    textPathSpanEL.textContent = "/ bio";
    summaryLinkEl.style.display = "none";
  });

  interestsEL.addEventListener("click", function () {
    paragraphEl.innerHTML = ` \u00A0 My interests in programming started with learning Blitz Plus and C#, but I quickly realized that game 
      development requires deep math knowledge and understanding of programming languages or the use of game engines.
      <br> <br> \u00A0 Searching for options led me to learn Java to develop Android applications, but my lack of understanding
      of OOP hindered my development in this direction. <br> <br> \u00A0 The next step was to study web development while
      participating in the GoIT marathon, after which I decided to take a full-fledged Full-stack Developer course.
      At the same time, I studied Python at the VSP \u0022 ZFC TNTU named after I. Puluj\u0022. <br> <br> \u00A0 Now I
      have the skills to develop functional and responsive web pages using HTML, CSS, JavaScript, and the React and Node.js
      frameworks. <br> <br> \u00A0 I am ready to use my skills in commercial projects and to constantly improve thems.`;
    textPathEL.textContent = "// personal-info";
    textPathSpanEL.textContent = "/ interests";
    summaryLinkEl.style.display = "none";
  });

  collageEl.addEventListener("click", function () {
    paragraphEl.innerHTML = `Education: <br> \u00B7 Educational institution: <br> \u00A0 Zborivsky Vocational College, 
      Higher Specialized Pedagogical Institution \u0022ZFC of TNTU named after I. Puluj\u0022 <br> \u00B7
      Type of study: Mixed (Full-time and distance) <br> \u00B7 Location: City of Zboriv, 57 B. Khmelnytsky St.
      <br> \u00B7 Educational level: Professional junior bachelor <br> \u00B7 Specialty: Software Engineering <br>
      \u00B7 Duration of study: 4 courses <br> <br> Skills and Knowledge: <br> \u00B7 Programming languages: Python
      (basics) <br> \u00B7 Learning the basics and principles of Object Oriented Programming (OOP)
      <br> <br> Additional Information: <br> \u00B7 During my studies, I gained practical experience in software
      development and application of OOP basics. <br> \u00B7 I have a general understanding of the principles of work
      and practical experience in using Python and Java to develop software products. <br> \u00B7 I am ready to use my
      skills and knowledge in a professional environment to achieve my goals and objectives in the field of programming.`;
    textPathEL.textContent = "// personal-info";
    textPathSpanEL.textContent = "/ education";
    summaryLinkEl.style.display = "none";
  });

  goitEl.addEventListener("click", function () {
    paragraphEl.innerHTML = `Educational Institution: <br> \u00A0 GoIT <br> Education: <br> \u00A0 
      Full-stack Developer <br> Type of training: <br> \u00A0 Distance (online) <br>
      Duration of training: <br> \u00A0 10 months <br> <br> Key competencies: <br> \u00B7
      Programming languages: Proficiency in HTML, CSS, and JavaScript, including the use of React and Node.js
      frameworks to create web applications and ensure their functionality. <br> \u00B7 Design and Development:
      Experience working with developer mode in graphical editors such as Figma and Pixso to create and debug web
      page interfaces. <br> \u00B7 Developer Tools: Expert knowledge of using developer tools in the browser to
      analyze and debug websites, ensuring their efficiency and reliability. <br> \u00B7 Version Control: Experience
      using Git and Github to manage code versions, collaborate with the development team, and ensure project integrity.
      <br> \u00B7 Teamwork: Ability to effectively collaborate with other developers in a team environment to ensure high
      quality and completion of projects on time and to spec.`;
    textPathEL.textContent = "// personal-info";
    textPathSpanEL.textContent = "/ education";
    summaryLinkEl.style.display = "none";
  });

  techEl.addEventListener("click", function () {
    paragraphEl.innerHTML = `Tech skills: <br> \u00B7 HTML <br> \u00B7 CSS <br> \u00B7 JavaScript 
    <br> \u00B7 Python (Base) <br> \u00B7 React <br> \u00B7 Node <br> \u00B7
    Figma <br> \u00B7 Git <br> \u00B7 Github`;
    textPathEL.textContent = "// proffessional-info";
    textPathSpanEL.textContent = "/ skills";
    summaryLinkEl.style.display = "none";
  });

  softEl.addEventListener("click", function () {
    paragraphEl.innerHTML = `Soft skills: <br> \u00B7 Teamwork; 
    <br> \u00B7 Helpfulness; <br> \u00B7 Honesty;
    <br> \u00B7 Desire to learn;
    <br> \u00B7 Problem solving.`;
    textPathEL.textContent = "// proffessional-info";
    textPathSpanEL.textContent = "/ skills";
    summaryLinkEl.style.display = "none";
  });

  resumeEl.addEventListener("click", function () {
    paragraphEl.innerHTML = "";
    summaryLinkEl.style.display = "flex";
    textPathEL.textContent = "// proffessional-info";
    textPathSpanEL.textContent = "/ resume";
  });

  swimmingEl.addEventListener("click", function () {
    paragraphEl.innerHTML = `\u00A0For a year and a half, swimming was not only my hobbyi, 
    but also a source of emotional and physical well-being. This sport gave me a sense of freedom and
    lightness, allowing me to train my body and relax my mind. <br> <br> My achievements: <br> \u00B7
    Mastering and improving three swimming styles: crawl, breaststroke and butterfly. <br> \u00B7
    Regular visits to the pool 1-2 times a week. <br> \u00B7 Increased endurance and improved overall
    physical fitness. <br> \u00B7 Participation in internal swimming competitions, where I won 2nd place
    in the 100 meters. <br> <br> The impact of the war: <br> \u00A0 Unfortunately, because of the war,
    I was forced to stop swimming. <br> The swimming pool I used to go to was closed, and my thoughts and
    emotions were focused on other, more pressing issues. <br> <br> Plans for the future: <br> \u00A0 I am
    looking forward to getting back to swimming. This sport has become an integral part of my life, and I
    believe it will help me overcome the effects of the war and restore my mental balance.`;
    textPathEL.textContent = "// hobbies";
    textPathSpanEL.textContent = "/ swimming";
    summaryLinkEl.style.display = "none";
  });

  gamingEl.addEventListener("click", function () {
    paragraphEl.innerHTML = `Gaming: <br> \u00A0 I have a hobby with depth and variety <br> <br> \u00A0 
    I devote my free time to gaming, which for me is not just entertainment, but also a way to develop strategic
    thinking, coordination and reflexes. <br> <br> \u00A0 My gaming preferences include both modern and retro games.
    <br> <br> \u00A0 Among the modern projects, I prefer dynamic shooters such as PUBG and Honkai Impact, which allow
    me to train reactions and teamwork. <br> <br> \u00A0 At the same time, I am also interested in exploring classic
    games, immersing myself in the deep plots and atmosphere of the past. <br> <br> \u00A0 I have completed numerous
    retro games on platforms such as PSP 2006 and Nintendo DS Lite. <br> <br> I have completed such projects as: <br>
    \u00B7 God of War: Ghost of Sparta and God of War: Chains of Olympus on the PSP; <br> \u00B7 Assassin's Creed: Bloodlines
    on PSP; <br> \u00B7 FIFA 09 on PSP; <br> \u00B7 The Legend of Zelda: Phantom Hourglass on DS Lite; <br> \u00B7
    GTA: Chinatown Wars on DS Lite; <br> \u00B7 Pokémon Diamond Version on DS Lite. <br> <br> \u00A0 For me, gaming
    is not just entertainment, but also an opportunity to constantly learn, develop my skills and get new experiences.
    <br> <br> \u00A0 I can confidently use this experience in my work, as it demonstrates my dedication, analytical skills,
    teamwork, and desire for self-development.`;
    textPathEL.textContent = "// hobbies";
    textPathSpanEL.textContent = "/ gaming";
    summaryLinkEl.style.display = "none";
  });
}

printText();

function openMessage() {
  const openBtnEl = document.querySelector("#open-modal-btn-js");
  const closeBtnEl = document.querySelector("#close-modal-btn-js");
  const modalEl = document.querySelector("#modal-js");

  openBtnEl.addEventListener("click", function () {
    if (modalEl.style.display === "none") {
      modalEl.style.display = "flex";
    } else {
      modalEl.style.display = "none";
    }
  });

  closeBtnEl.addEventListener("click", function () {
    modalEl.style.display = "none";
  });
}

openMessage();
