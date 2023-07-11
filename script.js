var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tablink of tabcontent) {
    tablink.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

var typed = new Typed(".text", {
  strings: ["Front End Developer", "Programmer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


//scroll

window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", function() {
  var logo = document.getElementById("logo");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    logo.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
  }
});

