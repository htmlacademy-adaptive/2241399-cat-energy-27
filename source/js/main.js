let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let slider = document.querySelector(".slider")

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
	navMain.classList.toggle('main-nav--closed');
});

if (slider) {
	let curtain = slider.querySelector(".slider__curtain")
	let sliderStyles = getComputedStyle(slider)
	let curtainPlaceStart
	let clientX

	function handleGrabCurtain (event) {
		curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"))
		clientX = event.clientX
		window.addEventListener("pointermove", handleMoveCurtain)
	}

	function handleMoveCurtain (event) {
		let deltaX = event.clientX - clientX
		let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth
		let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1)
		slider.style.setProperty("--curtain-place", `${curtainPlace}`)
	}

	function handleReleaseCurtaine () {
		window.removeEventListener("pointermove", handleMoveCurtain)
	}

	window.addEventListener("pointerup", handleReleaseCurtaine)

	curtain.addEventListener("pointerdown", handleGrabCurtain)
}
