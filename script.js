function skillPageHover(divBox) {
    const element = document.getElementById(divBox);
    element.classList.add("upWhenHover");
}
function removeSkillPageHover(divBox) {
    const element = document.getElementById(divBox);
    element.classList.remove("upWhenHover");
}


function toggleMenu() {
    let menu = document.getElementById("menuDiv");
    let menuIcon = document.getElementById("menuIcon");

    if (menu.classList.contains("left-[-400px]")) {
      menu.classList.remove("left-[-400px]");
      menu.classList.add("left-0");
      menuIcon.classList.add("rotate-90");
    } else {
      menu.classList.remove("left-0");
      menu.classList.add("left-[-400px]");
      menuIcon.classList.remove("rotate-90");
    }
  }



  // this is for highlighting navBar that user currently at which page 
  document.addEventListener("DOMContentLoaded",function (){
    const home = document.querySelector(".index");
    const About = document.querySelector(".About");
    const Career = document.querySelector(".Career");
    const Projects = document.querySelector(".Projects");
    const Skills = document.querySelector(".Skills");
    const Acheivements = document.querySelector(".Acheivements");
    
    // Get the current page filename
    const currentPage = window.location.pathname.split("/").pop();

    if(currentPage === "index.html"){
      home.classList.add("linkHover");
    }
    else if(currentPage === "about.html"){
      About.classList.add("linkHover");
    }
    else if(currentPage === "career.html"){
      Career.classList.add("linkHover");
    }
    else if(currentPage === "projects.html"){
      Projects.classList.add("linkHover");
    }
    else if(currentPage === "skills.html"){
      Skills.classList.add("linkHover");
    }
    else if(currentPage === "acheivement.html"){
      Acheivements.classList.add("linkHover");
    }
  })


  // this is for showing popup of about page buttons
  function showAboutPagePopup(btnName) {
    const popup = document.getElementById("aboutPagePopupBox");
    const textDiv = document.getElementById("insideTextDiv");
    const textBox = document.getElementById("aboutPopupText");
  
    // Set the content first
    if (btnName === "My Journey") {
      textBox.innerText =
        "My journey is a testament to constant growth. From mastering basic HTML to building full-stack applications, I’ve embraced every challenge as an opportunity to evolve. I believe great design begins with empathy, and every project I create reflects that.";
    } else if (btnName === "My Interests") {
      textBox.innerText =
        "I’m deeply passionate about turning ideas into reality through code. Whether it's crafting interactive UIs, exploring AI, or optimizing performance, I love pushing boundaries and learning new things. Innovation and impact drive me.";
    } else if (btnName === "Why contact me") {
      textBox.innerText =
        "If you're looking for someone who blends creativity with technical expertise and truly cares about delivering meaningful solutions—let’s talk. I'm ready to collaborate, innovate, and contribute to something great.";
    }
  
    // Show popup container first
    popup.classList.remove("hidden");
  
    // Trigger transition after slight delay to ensure visibility
    setTimeout(() => {
      textDiv.classList.remove("opacity-0", "scale-95", "pointer-events-none");
      textDiv.classList.add("opacity-100", "scale-100");
    }, 20); // short delay to allow DOM to render
  }
  
  function hideAboutPagePopup() {
    const popup = document.getElementById("aboutPagePopupBox");
    const textDiv = document.getElementById("insideTextDiv");
    const textBox = document.getElementById("aboutPopupText");
  
    // Animate out
    textDiv.classList.remove("opacity-100", "scale-100");
    textDiv.classList.add("opacity-0", "scale-75", "pointer-events-none");
  
    // After animation, hide popup and clear text
    setTimeout(() => {
      popup.classList.add("hidden");
      textBox.innerText = "";
    }, 50); // match transition duration
  }

  // download the CV when clicked on the button
  function previewAndDownloadPDF() {
    // Trigger download
    const a = document.createElement('a');
    a.href = 'My_CV.pdf';
    a.download = 'My_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Open preview
    window.open('My_CV.pdf', '_blank');
  }
  


  // this is for animating boxes in Acheivements page  

      const boxes = document.querySelectorAll(".testBox");
      let isPaused = false;
      let lastTriggeredBox = null;

      function checkBoxPosition() {
        const screenCenter = window.innerWidth / 2;

        if (isPaused) {
          requestAnimationFrame(checkBoxPosition);
          return;
        }

        boxes.forEach((box) => {
          const rect = box.getBoundingClientRect();
          const boxCenter = rect.left + rect.width / 2;
          const isAtCenter = Math.abs(boxCenter - screenCenter) < 10;

          if (isAtCenter && lastTriggeredBox !== box) {
            isPaused = true;
            lastTriggeredBox = box;

            box.classList.add("paused");

            boxes.forEach((b) => {
              b.style.animationPlayState = "paused";
            });

            setTimeout(() => {
              boxes.forEach((b) => {
                b.style.animationPlayState = "running";
              });
              box.classList.remove("paused");
              isPaused = false;
            }, 1000);
          }

          if (!isAtCenter && lastTriggeredBox === box) {
            lastTriggeredBox = null;
          }
        });

        requestAnimationFrame(checkBoxPosition);
      }

      requestAnimationFrame(checkBoxPosition);

