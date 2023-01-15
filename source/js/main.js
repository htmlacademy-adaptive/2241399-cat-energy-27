let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
	navMain.classList.toggle('main-nav--closed');
});

let mapImg = document.querySelector('.map__img');
let mapIframe = document.querySelector('.map__iframe');

mapImg.classList.add('disabled');
mapIframe.classList.remove('disabled');
