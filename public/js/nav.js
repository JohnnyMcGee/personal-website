/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => { 
  if (prevScrollpos < window)
});

// window.onscroll = function onScrollNav() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// document.body.addEventListener("scroll", () => {
//   console.log(document.documentElement.scrollTop || document.body.scrollTop);
// }); 
