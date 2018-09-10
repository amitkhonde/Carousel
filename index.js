let slides = document.getElementsByClassName('slide');
let slidesHolder = document.getElementById("slides");

window.setTimeout(()=>{
	slides[0].classList.add("current-slide");
	startSlider();
}, 1000);

function startSlider() {
	let currentSlide = 1;

	window.setInterval(() => {	
		slides[currentSlide].classList.add("current-slide");
	
		slides[currentSlide-1].classList.remove("current-slide");
		slidesHolder.appendChild(slides[currentSlide - 1]);	
		
	}, 2000);
}