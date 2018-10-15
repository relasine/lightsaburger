const burger = document.querySelector('.lightsaburger');
let topCon = document.querySelector('.top');
let middleCon = document.querySelector('.middle');
let bottomCon = document.querySelector('.bottom');
let topBlade = document.querySelector('.top-blade')
let middleBlade = document.querySelector('.middle-blade')
let bottomBlade = document.querySelector('.bottom-blade')
let grip = document.querySelectorAll('.grip')


burger.addEventListener('click', toggleBurger);

function toggleBurger() {
  console.log(grip)
  topCon.classList.toggle('top-toggled')
  middleCon.classList.toggle('middle-toggled')
  bottomCon.classList.toggle('bottom-toggled')
  topBlade.classList.toggle('top-blade-toggled')
  middleBlade.classList.toggle('middle-blade-toggled')
  bottomBlade.classList.toggle('bottom-blade-toggled')
  grip.forEach(function(element) {
    element.classList.toggle('grip-toggled')
  });
}