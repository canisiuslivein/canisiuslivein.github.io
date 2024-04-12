document.querySelector('.menu-toggle').addEventListener("click", function() {
    document.querySelector(".nav").classList.toggle("mobile-nav");
    this.classList.toggle("is-active");
});

window.onscroll = function() {scrollFunction()};
const navitem = document.getElementsByClassName("nav-item");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    for (let i = 0; i < navitem.length; i++) {
        navitem[i].style.color = "#064c72";
    }
    document.getElementById("navbar").style.backgroundColor = "#f1ebe1"; /* Change the background color when scrolled */
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent"; /* Make transparent when at the top */
    for (let i = 0; i < navitem.length; i++) {
        navitem[i].style.color = "#f1ebe1";
    }
  }
}