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