"use strict";

const navList = document.getElementsByClassName("nav__list");
const toggle = document.getElementById("toggle");
const toggleOff = document.getElementById("toggle-off");

function navVisible() {
  if ((navList.classList.visibility = "hidden")) {
    navList.classList.add(".block") = "visible";
    toggle.style.visibility = "hidden";
    toggleOff.style.visibility = "visible";
  }
  console.log("visible");
}

function navInvisible() {
  if ((navList.style.visibility = "visible")) {
    navList.style.visibility = "hidden";
    toggle.style.visibility = "visible";
    toggleOff.style.visibility = "hidden";
  }
  console.log("invisible");
}
