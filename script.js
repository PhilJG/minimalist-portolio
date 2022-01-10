"use strict";

const navList = document.getElementsByClassName("nav__list");
const toggle = document.getElementsByClassName("burger");
const toggleOff = document.getElementById("toggle-off");

function classToggle() {
  const navs = document.querySelectorAll(".nav__list");

  navs.forEach((nav) => nav.classList.toggle("block"));
}

document.toggle.addEventListener("click", classToggle);

// toggle.addEventListener("click", navVisible());
// toggleOff.addEventListener("click", navInvisible());

// function navVisible() {
//   if (navList.classList == "hidden") {
//     navList.style.display = "block";
//     toggle.style.display = "none";
//     toggleOff.style.display = "block";
//   }
//   console.log("block");
// }

// function navInblock() {
//   if (navList.classList.display == "block") {
//     navList.style.display = "none";
//     toggle.style.display = "block";
//     toggleOff.style.display = "none";
//   }
//   console.log("invisible");
// }
