const header = document.querySelector("header");
const navButton = document.querySelector("nav button");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 350) {
    header.style.backgroundColor = "white";
    navButton.style.backgroundColor = "#538724";
  } else {
    header.style.backgroundColor = "#EBC133";
    navButton.style.backgroundColor = "black";
  }
});
