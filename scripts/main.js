/*const navLinks = document.querySelectorAll(".nav-link");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "10px 25px";
    $(".navbar").

  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.padding = "10px 30px";
  }
}
*/

$(document).ready(function() {
    $(".trigger").click(function() {
        $(".overlay").slideToggle();
    });
});