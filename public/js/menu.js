const toggle = document.getElementById("menu-toggle");

const openMenu = () => (toggle.checked = true);
const closeMenu = () => (toggle.checked = false);

// close the menu if the user clicks away
window.addEventListener("click", (e) => {
  if (toggle.checked) {
    const menu = document.getElementById("menu");
    const clickedOutside =
      !toggle.contains(e.target) && !menu.contains(e.target);
    if (clickedOutside) closeMenu();
  }
});

// or if they press escape
const onKeyDown = (e) => {
  let escPressed = e.key === "Escape";
  if (escPressed && toggle.checked) closeMenu();
  if (e.key === "m") openMenu();
};
document.addEventListener("keydown", onKeyDown);

const hideNavbar = () =>
  (document.getElementById("navbar").style.top = "-20vh");

const showNavbar = () => (document.getElementById("navbar").style.top = "0");

let scrollPos = document.body.scrollTop;
const onScroll = (e) => {
  let newScroll = document.body.scrollTop;
  const isScrollDown = newScroll > scrollPos;
  isScrollDown ? hideNavbar() : showNavbar();
  scrollPos = newScroll;

  if (toggle.checked) closeMenu();
};

document.body.addEventListener("scroll", onScroll);
