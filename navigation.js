`use strict`;

const navBtn = document.querySelectorAll(`nav > ul > li > a`);

const checkNav = function () {
  for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].classList.remove(`active`);
    this.classList.add(`active`);
  }
};

navBtn.forEach((btn) => btn.addEventListener(`click`, checkNav));
window.addEventListener(`scroll`, function () {
  const stickyNav = document.querySelector(`.nav-container`);
  const body = document.querySelector(`body`);
  stickyNav.classList.toggle(`scrollNav`, window.scrollY > 0);
  // body.classList.toggle(`scrollBody`, window.scrollY > 0);
});
