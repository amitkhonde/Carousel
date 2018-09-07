let slides = document.getElementsByClassName('slide');
let currentSlide = 0;
window.setInterval(() => {
	if(currentSlide == slides.length - 1) {
		// reset all the classes and make currentSlide = 0;
		for(var i = 0; i < slides.length; i++) {
			slides[i].classList.remove("current-slide");
		}
		
		currentSlide = 0;
	} else {
		slides[currentSlide].classList.add("current-slide");
		currentSlide++;
	}
}, 2000);
