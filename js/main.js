let navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),slider=document.querySelector(".slider");if(navMain.classList.remove("main-nav--nojs"),navMain.classList.add("main-nav--closed"),navToggle.addEventListener("click",(function(){navMain.classList.toggle("main-nav--closed")})),slider){let e,n,t=slider.querySelector(".slider__curtain"),a=getComputedStyle(slider);function handleGrabCurtain(t){e=+a.getPropertyValue("--curtain-place"),n=t.clientX,window.addEventListener("pointermove",handleMoveCurtain)}function handleMoveCurtain(t){let a=t.clientX-n,i=e+a/slider.clientWidth,r=Math.min(Math.max(i,0),1);slider.style.setProperty("--curtain-place",`${r}`)}function handleReleaseCurtaine(){window.removeEventListener("pointermove",handleMoveCurtain)}window.addEventListener("pointerup",handleReleaseCurtaine),t.addEventListener("pointerdown",handleGrabCurtain)}