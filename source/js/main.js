let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
	navMain.classList.toggle('main-nav--closed');
});
