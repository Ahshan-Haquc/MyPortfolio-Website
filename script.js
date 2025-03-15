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
    const home = document.querySelector("index.html");
    
      // Get the current page filename
  const currentPage = window.location.pathname.split("/").pop();
  console.log(currentPage);

    if(currentPage === "index.html"){
      console.log("here working");
      home.classList.add("text-blue-500", "font-bold");
    }
  })