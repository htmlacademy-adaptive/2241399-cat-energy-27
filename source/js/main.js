let navMain = document.querySelector('.page-header__nav-list');
let navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__nav-list--nojs');
navToggle.classList.remove('page-header__toggle--nojs');

navToggle.addEventListener('click', function () {
		navMain.classList.toggle('page-header__nav-list--opened');
		navToggle.classList.toggle('page-header__toggle--opened');
});

let mapImg = document.querySelector('.map__img');
let mapIframe = document.querySelector('.map__iframe');

mapImg.classList.add('disabled');
mapIframe.classList.remove('disabled');
