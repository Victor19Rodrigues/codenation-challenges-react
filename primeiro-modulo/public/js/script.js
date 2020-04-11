const switchElement = document.getElementById("inner-switch");
const mainElement = document.getElementsByTagName("main")[0];
const catalogMenu = document.getElementsByClassName("catalog-menu")[0];
const footerElement = document.getElementsByTagName("footer")[0];

switchElement.addEventListener("click", function () {
  if (mainElement.classList.contains("dark")) {
    mainElement.classList.remove("dark");
    catalogMenu.classList.remove("dark");
    footerElement.classList.remove("dark");
    switchElement.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
  } else {
    mainElement.classList.add("dark");
    catalogMenu.classList.add("dark");
    footerElement.classList.add("dark");
    switchElement.innerHTML = '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>';
  }
});
