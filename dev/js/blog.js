var leftFour   = document.getElementById('scroll_left_four');
var rightFour  = document.getElementById('scroll_right_four');
var sliderFour = document.getElementById('slider-items_four');

leftFour.addEventListener('click', function(){
	if(parseInt(sliderFour.style.right) > 0) {
		sliderFour.style.right = parseInt(sliderFour.style.right) - 1000 + 'px';
	} else {
		sliderFour.style.right -= 1000 + 'px';
	}
});

rightFour.addEventListener('click', function(){
	if(sliderFour.style.right) {
		if (parseInt(sliderFour.style.right) == 1000) {
			sliderFour.style.right = '0';
		} else {
			sliderFour.style.right = parseInt(sliderFour.style.right) + 1000 + 'px';
		}
	} else {
		sliderFour.style.right += 1000 + 'px';
	}
});