"use strict";

const navList = document.querySelector(".nav__list");
const navIcon = document.querySelector(".nav__icon");
const closeIcon = document.querySelector(".close__icon");

const toggleOn = function () {
  if ((navList.style.diplay = "none")) {
    navList.style.display = "flex";
    navIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
};

const toggleOff = function () {
  if ((navList.style.diplay = "flex")) {
    navList.style.display = "none";
    navIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
};

navIcon.addEventListener("click", toggleOn);
closeIcon.addEventListener("click", toggleOff);
