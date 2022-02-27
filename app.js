var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

ScrollReveal().reveal(".inicial-title", { delay: 500, origin: "left" });
ScrollReveal().reveal(".inicial-img", { delay: 400, origin: "left" });
ScrollReveal().reveal(".info", { delay: 900, origin: "right" });
ScrollReveal().reveal(".trailer1", { delay: 600, origin: "bottom" });
ScrollReveal().reveal(".next-movies", { delay: 700, origin: "bottom" });
