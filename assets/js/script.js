const header = document.querySelector("header");
console.log(header);
const navButton = document.querySelector("nav button");
console.log(navButton);
const letters = document.querySelectorAll("#letters>g");
console.log(letters);

//Scroll Event
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 350) {
    header.style.backgroundColor = "white";
    navButton.style.backgroundColor = "#538724";
  } else {
    header.style.backgroundColor = " #ffc017";
    navButton.style.backgroundColor = "black";
  }
});

//Random Letters
// const randomCalc = Math.floor(Math.random() * letters.length);
// console.log(randomCalc);
// const randomM = letters[randomCalc];
// console.log(randomM);

// Blinking letters
setInterval(() => {
  const randomCalc = Math.floor(Math.random() * letters.length);

  const randomM = letters[randomCalc];

  if (randomM.style.opacity === "0") {
    randomM.style.opacity = "1";
  } else if (randomM.style.opacity === "1") {
    randomM.style.opacity = "0";
  }
  setTimeout(() => {
    randomM.style.opacity = "0";
  }, 100);
}, 300);
