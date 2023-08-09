document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  menuButton.addEventListener("click", useDropdownMenu);
});
document.addEventListener("DOMContentLoaded", () => {
  const dropedMenu = document.querySelector(".dropdown_menu");
  dropedMenu.addEventListener("click", useDropdownMenu);
});

function useDropdownMenu() {
  const dropdown_menu = document.querySelector(".dropdown_menu");

  dropdown_menu.classList.toggle("active");
  isMenuOpened = dropdown_menu.classList.contains("active") ? true : false;
  adjustBoxPosition(isMenuOpened, calculateDropMenuMarginHeight);
  if (isMenuOpened) {
    moveDownAllElements();
  } else {
    moveUpAllElements();
  }
}

function moveDownAllElements() {
  const title = document.getElementById("title");
  const titleDescription = document.getElementById("title_description");
  const dropMenu = document.querySelector(".dropdown_menu");
  const allElements = [title, titleDescription, dropMenu];

  allElements.forEach((element) => {
    if (
      isElementExist(element) &&
      element.classList.contains("fadeUpAnimation")
    ) {
      element.classList.toggle("fadeUpAnimation");
    } else if (
      isElementExist(element) &&
      element.classList.contains("moveUpAnimation")
    ) {
      element.classList.toggle("moveUpAnimation");
    }
    if (isElementExist(element)) {
      element.classList.toggle("fadeInAnimation");
    }
  });
}

function moveUpAllElements() {
  const title = document.getElementById("title");
  const titleDescription = document.getElementById("title_description");
  const dropMenu = document.querySelector(".dropdown_menu");
  const allElements = [title, titleDescription, dropMenu];

  allElements.forEach((element) => {
    if (
      isElementExist(element) &&
      element.classList.contains("fadeInAnimation")
    ) {
      element.classList.toggle("fadeInAnimation");
    }
    if (window.location.pathname.includes("index.html")) {
      if (isElementExist(element)) {
        element.classList.toggle("fadeUpAnimation");
      }
    } else if (isElementExist(element)) {
      element.classList.toggle("moveUpAnimation");
    }
  });
}

function isElementExist(element) {
  return element != null && element != undefined ? true : false;
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
