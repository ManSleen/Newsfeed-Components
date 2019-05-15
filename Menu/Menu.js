// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
const body = document.querySelector("body");

console.log(body);
// Using your menuButton reference, add a click handler that calls toggleMenu

let tween = TweenMax.from(menu, 0.2, {
  left: -300,
  reversed: true,
  paused: true
});

const toggleMenu = event => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle("menu--open");
  tween.reversed() ? tween.play() : tween.reverse();
};

menuButton.addEventListener("click", () => toggleMenu());

window.addEventListener("mouseup", function(event) {
  if (
    event.target != menu &&
    event.target.parentNode != menu &&
    event.target.parentNode.parentNode != menu &&
    event.target.parentNode.parentNode.parentNode != menu &&
    event.target != menuButton
  ) {
    tween.reverse();
  }
});
