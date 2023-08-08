document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const dropdown_menu = document.querySelector(".dropdown_menu");
  const title = document.getElementById("title");

  menuButton.addEventListener("click", () => {
    isMenuOpened = dropdown_menu.classList.contains("active") ? true : false;
    dropdown_menu.classList.toggle("active");
    title.classList.toggle("menu");
    adjustBoxPosition(isMenuOpened, calculateDropMenuMarginHeight());
  });
});

function calculateDropMenuMarginHeight() {
  const menu = document.querySelector(".dropdown_menu");
  if (menu.classList.contains("active")) {
    return document.querySelector(".dropdown_menu").offsetHeight;
  }
  return 0;
}

function adjustBoxPosition(isMenuOpened, height) {
  const title = document.getElementById("title");

  if (isMenuOpened === true) {
    title.style.marginTop = 20 + "px";
  } else {
    title.style.marginTop = height + "px";
  }
}
