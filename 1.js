document.addEventListener('DOMContentLoaded',function () {
	
	var left = document.querySelector('.nut-1');
	var right = document.querySelector('.nut-2');
	var slides = document.getElementsByClassName('slide');
	var currentIndex = 0;
	var nextSlide = function () {
		var currentElement = slides[currentIndex];
		if (currentIndex == slides.length - 1)  {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
		console.log(currentIndex);
		var nextElement = slides[currentIndex];
		nextElement.classList.add('dangxem');
		currentElement.classList.remove('dangxem');
	}

	var preSlide = function() {
		var currentElement = slides[currentIndex];
		if (currentIndex == slides.length - 1)  {
			currentIndex--;
		} else if (currentIndex <= 0) {
			console.log('vao else if')
			currentIndex = slides.length - 1;
		} else {
			currentIndex--;
		}
		console.log(currentIndex);
		var nextElement = slides[currentIndex];
		nextElement.classList.add('dangxem');
		currentElement.classList.remove('dangxem');
	}
	left.addEventListener('click', preSlide);
	right.addEventListener('click', nextSlide);

	var trangthai = 'duoi';
	var mask = document.getElementsByClassName('mask');
	console.log(mask[0].attribute);
	window.addEventListener('scroll', function(){
		
		var x = pageYOffset;
		if (x > 760){
			trangthai = 'tren';
			mask[0].classList.add('dangxem');
		} else {
			trangthai = 'duoi';
			mask[0].classList.remove('dangxem');
		}
		
	})
},false);