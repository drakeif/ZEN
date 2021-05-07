//WAYPOINT
let waypoint = new Waypoint({
    element: document.getElementById('point'),
    handler: function(direction) {
  
      let header = document.querySelector('.header');
  
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

const body = document.getElementById('body');

const openMenu = () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
}

const closeMenu = () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('active');
}

burger.addEventListener('click', openMenu);

/* const toGo = document.querySelectorAll('.header__menu');

for(let i = 0; i < toGo.length; i++) {
    toGo[i].addEventListener('click', closeMenu);
}
 */
/* const toGoLink = document.querySelector('.header__menu');

toGoLink.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
}) */

const toGoLink2 = document.querySelectorAll('.header__menu');

toGoLink2.forEach(el => el.addEventListener('click', closeMenu));

// CHANGE LANGUAGE
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

// переадресує на url з вказаною мовою
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    // Тут підставляємо класи до обєктів які хочемо перекласти
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    document.querySelector('.lang-main-title').innerHTML = langArr['main-title'][hash];
    document.querySelector('.lang-sup-title').innerHTML = langArr['sup-title'][hash];
    document.querySelector('.lang-sub-title').innerHTML = langArr['sub-title'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}
changeLanguage();
// JS NAV BTN
const navBtn = document.querySelectorAll('.js-nav');

navBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;

        if(!currentBtn.classList.contains('active')) {
        navBtn.forEach(function(item) {
            item.classList.remove('active');
        });
            currentBtn.classList.add('active');
        };
    });
});

document.querySelector('.js-nav:nth-child(1)').click();
