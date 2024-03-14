function printText() {
  const biography1 = document.getElementById("biography1");
  const interests1 = document.getElementById("interests1");
  const education1 = document.getElementById("education1");
  const education2 = document.getElementById("education2");
  const softSkills = document.getElementById("soft-skills-button");
  const techSkills = document.getElementById("tech-skills-button");
  const swimming = document.getElementById("button-swimming");
  const gaming = document.getElementById("button-gaming");
  const summaryLink = document.getElementById("summary-link");
  const resume = document.getElementById("resume-button");
  const paragraph = document.getElementById("paragraph");
  const textPath = document.getElementById("path");
  const textPathSpan = document.getElementById("path-span");

  biography1.addEventListener("click", function () {
    paragraph.innerHTML =
      "First and last name: <br> \u00A0 Vladyslav Pavlenko <br> Place of residence: <br> \u00A0 Zboriv, Ukraine <br> <br> Education: <br> \u00A0 Student, VSP \u0022ZFK TNTU named after I. Pului\u0022, specialty \u0022Software Engineering\u0022  <br> <br> Experience: <br> GoIT \u0022Full-stack developer\u0022  courses: <br> \u00B7 Having gained practical web development skills, I have acquired the skills of marking up web pages using HTML and CSS. <br> \u00B7 The ability to customize page elements using CSS styles and adherence to semantic markup. <br> \u00B7 Using the mobilfirst approach and responsive design to ensure optimal viewing on different devices. <br> \u00B7 Using the JavaScript programming language, as well as React and Node.js frameworks to create web application functionality. <br> <br> Skills: <br> \u00B7 Programming languages: JavaScript, Python (learning), Java (basic skills) <br> \u00B7 Frameworks: React, Node.js <br> \u00B7 Confident user of CSS, HTML <br> <br> Personal qualities: <br> \u00B7 Responsible and organized, able to work both independently and in a team.<br> \u00B7 I have a desire to learn and develop in the field of programming. <br> <br> \u00A0 With these skills and attributes, I am eager to gain experience in your company and actively contribute to projects."; /* prettier-ignore */
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ bio";
    summaryLink.style.display = "none";
  });

  interests1.addEventListener("click", function () {
    paragraph.innerHTML =
      " \u00A0 My interests in programming started with learning Blitz Plus and C#, but I quickly realized that game development requires deep math knowledge and understanding of programming languages or the use of game engines. <br> <br> \u00A0 Searching for options led me to learn Java to develop Android applications, but my lack of understanding of OOP hindered my development in this direction. <br> <br> \u00A0 The next step was to study web development while participating in the GoIT marathon, after which I decided to take a full-fledged Full-stack Developer course. At the same time, I studied Python at the VSP \u0022 ZFC TNTU named after I. Puluj\u0022. <br> <br> \u00A0 Now I have the skills to develop functional and responsive web pages using HTML, CSS, JavaScript, and the React and Node.js frameworks. <br> <br> \u00A0 I am ready to use my skills in commercial projects and to constantly improve thems.";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ interests";
    summaryLink.style.display = "none";
  });

  education1.addEventListener("click", function () {
    paragraph.innerHTML =
      "Education: <br> \u00B7 Educational institution: <br> \u00A0 Zborivsky Vocational College, Higher Specialized Pedagogical Institution \u0022ZFC of TNTU named after I. Puluj\u0022 <br> \u00B7 Type of study: Mixed (Full-time and distance) <br> \u00B7 Location: City of Zboriv, 57 B. Khmelnytsky St. <br> \u00B7 Educational level: Professional junior bachelor <br> \u00B7 Specialty: Software Engineering <br> \u00B7 Duration of study: 4 courses <br> <br> Skills and Knowledge: <br> \u00B7 Programming languages: Python (basics), Java (basics) <br> \u00B7 Learning the basics and principles of Object Oriented Programming (OOP) <br> <br> Additional Information: <br> \u00B7 During my studies, I gained practical experience in software development and application of OOP basics. <br> \u00B7 I have a general understanding of the principles of work and practical experience in using Python and Java to develop software products. <br> \u00B7 I am ready to use my skills and knowledge in a professional environment to achieve my goals and objectives in the field of programming.";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ education";
    summaryLink.style.display = "none";
  });

  education2.addEventListener("click", function () {
    paragraph.innerHTML =
      "Educational Institution: <br> \u00A0 GoIT <br> Education: <br> \u00A0 Full-stack Developer <br> Type of training: <br> \u00A0 Distance (online) <br> Duration of training: <br> \u00A0 10 months <br> <br> Key competencies: <br> \u00B7 Programming languages: Proficiency in HTML, CSS, and JavaScript, including the use of React and Node.js frameworks to create web applications and ensure their functionality. <br> \u00B7 Design and Development: Experience working with developer mode in graphical editors such as Figma and Pixso to create and debug web page interfaces. <br> \u00B7 Developer Tools: Expert knowledge of using developer tools in the browser to analyze and debug websites, ensuring their efficiency and reliability. <br> \u00B7 Version Control: Experience using Git and Github to manage code versions, collaborate with the development team, and ensure project integrity. <br> \u00B7 Teamwork: Ability to effectively collaborate with other developers in a team environment to ensure high quality and completion of projects on time and to spec.";
    textPath.textContent = "// personal-info";
    textPathSpan.textContent = "/ education";
    summaryLink.style.display = "none";
  });

  techSkills.addEventListener("click", function () {
    paragraph.innerHTML =
      "Tech skills: <br> \u00B7 HTML <br> \u00B7 CSS <br> \u00B7 JavaScript <br> \u00B7 Python (Base)<br> \u00B7 Java (Base) <br> \u00B7 React <br> \u00B7 Node <br> \u00B7 Figma <br> \u00B7 Pixso <br> \u00B7 Git <br> \u00B7 Github";
    textPath.textContent = "// proffessional-info";
    textPathSpan.textContent = "/ skills";
    summaryLink.style.display = "none";
  });

  softSkills.addEventListener("click", function () {
    paragraph.innerHTML =
      "Soft skills: <br> \u00B7 Willingness to learn; <br> \u00B7 Flexibility and ability to adapt; <br> \u00B7 Communication; <br> \u00B7 Time planning and organization;Obtaining new information by solving bugs and errors; <br> \u00B7 Adequacy.";
    textPath.textContent = "// proffessional-info";
    textPathSpan.textContent = "/ skills";
    summaryLink.style.display = "none";
  });

  resume.addEventListener("click", function () {
    paragraph.innerHTML = "";
    summaryLink.style.display = "flex";
    textPath.textContent = "// proffessional-info";
    textPathSpan.textContent = "/ resume";
  });

  swimming.addEventListener("click", function () {
    paragraph.innerHTML =
      "\u00A0For a year and a half, swimming was not only my hobby, but also a source of emotional and physical well-being. This sport gave me a sense of freedom and lightness, allowing me to train my body and relax my mind. <br> <br> My achievements: <br> \u00B7 Mastering and improving three swimming styles: crawl, breaststroke and butterfly. <br> \u00B7 Regular visits to the pool 1-2 times a week. <br> \u00B7 Increased endurance and improved overall physical fitness. <br> \u00B7 Participation in internal swimming competitions, where I won 2nd place in the 100 meters. <br> <br> The impact of the war: <br> \u00A0 Unfortunately, because of the war, I was forced to stop swimming. <br> The swimming pool I used to go to was closed, and my thoughts and emotions were focused on other, more pressing issues. <br> <br> Plans for the future: <br> \u00A0 I am looking forward to getting back to swimming. This sport has become an integral part of my life, and I believe it will help me overcome the effects of the war and restore my mental balance.";
    textPath.textContent = "// hobbies";
    textPathSpan.textContent = "/ swimming";
    summaryLink.style.display = "none";
  });

  gaming.addEventListener("click", function () {
    paragraph.innerHTML =
      "Gaming: <br> \u00A0 I have a hobby with depth and variety <br> <br> \u00A0 I devote my free time to gaming, which for me is not just entertainment, but also a way to develop strategic thinking, coordination and reflexes. <br> <br> \u00A0 My gaming preferences include both modern and retro games. <br> <br> \u00A0 Among the modern projects, I prefer dynamic shooters such as PUBG and Honkai Impact, which allow me to train reactions and teamwork. <br> <br> \u00A0 At the same time, I am also interested in exploring classic games, immersing myself in the deep plots and atmosphere of the past. <br> <br> \u00A0 I have completed numerous retro games on platforms such as PSP 2006 and Nintendo DS Lite. <br> <br> I have completed such projects as: <br> \u00B7 God of War: Ghost of Sparta and God of War: Chains of Olympus on the PSP; <br> \u00B7 Assassin's Creed: Bloodlines on PSP; <br> \u00B7 FIFA 09 on PSP; <br> \u00B7 The Legend of Zelda: Phantom Hourglass on DS Lite; <br> \u00B7 GTA: Chinatown Wars on DS Lite; <br> \u00B7 Pokémon Diamond Version on DS Lite. <br> <br> \u00A0 For me, gaming is not just entertainment, but also an opportunity to constantly learn, develop my skills and get new experiences. <br> <br> \u00A0 I can confidently use this experience in my work, as it demonstrates my dedication, analytical skills, teamwork, and desire for self-development.";
    textPath.textContent = "// hobbies";
    textPathSpan.textContent = "/ gaming";
    summaryLink.style.display = "none";
  });
}

printText();

function openMessage() {
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

openMessage();
