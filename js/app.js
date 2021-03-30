//WAYPOINT
let waypoint = new Waypoint({
    element: document.getElementById('point'),
    handler: function(direction) {
  
      let header = document.querySelector('header');
  
      if (direction === 'down') {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }
});
// BURGER
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const menu = document.querySelector('.header__menu');

const openMenu = () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
}

const closeMenu = () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
}

burger.addEventListener('click', openMenu);

const toGo = document.querySelectorAll('.header__menu');

for(let i = 0; i < toGo.length; i++) {
    toGo[i].addEventListener('click', closeMenu);
}