document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const dropedMenu = document.querySelector(".dropdown_menu");
  menuButton.addEventListener("mouseenter", useDropdownMenu);
  dropedMenu.addEventListener("mouseleave", useDropdownMenu);
});

function useDropdownMenu() {
  const dropdown_menu = document.querySelector(".dropdown_menu");
  const title = document.getElementById("title");
  dropdown_menu.classList.toggle("active");
  title.classList.toggle("active");
  isMenuOpened = dropdown_menu.classList.contains("active") ? true : false;
  adjustBoxPosition(isMenuOpened, calculateDropMenuMarginHeight);
}

function calculateDropMenuMarginHeight() {
  var menu = document.querySelector(".dropdown_menu");
  if (menu.classList.contains("active")) {
    menu = document.querySelector(".dropdown_menu .active");
    return menu.offsetHeight + menu.style.marginTop;
  } else {
    return 0;
  }
}

function adjustBoxPosition(isMenuOpened, height) {
  const title = document.getElementById("title");

  if (isMenuOpened === true) {
    title.style.marginTop = height + "px";
  } else {
    title.style.marginTop = height + "px";
  }
}
