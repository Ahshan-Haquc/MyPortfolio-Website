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
      menuIcon.classList.add("rotate-180");
    } else {
      menu.classList.remove("left-0");
      menu.classList.add("left-[-400px]");
      menuIcon.classList.remove("rotate-180");
    }
  }