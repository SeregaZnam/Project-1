var leftTwo     = document.getElementById('scroll_left_two');
var rightTwo    = document.getElementById('scroll_right_two');
var sliderTwo   = document.getElementById('slider-items_two');
var leftThree   = document.getElementById('scroll_left_three');
var rightThree  = document.getElementById('scroll_right_three');
var sliderThree = document.getElementById('slider-items_three');

leftTwo.addEventListener('click', function(){
	if(parseInt(sliderTwo.style.right) > 0) {
		sliderTwo.style.right = parseInt(sliderTwo.style.right) - 490 + 'px';
	} else {
		sliderTwo.style.right -= 490 + 'px';
	}
});

rightTwo.addEventListener('click', function(){
	if(sliderTwo.style.right) {
		if (parseInt(sliderTwo.style.right) == 980) {
			sliderTwo.style.right = '0';
		} else {
			sliderTwo.style.right = parseInt(sliderTwo.style.right) + 490 + 'px';
		}
	} else {
		sliderTwo.style.right += 490 + 'px';
	}
});

leftThree.addEventListener('click', function(){
	if(parseInt(sliderThree.style.right) > 0) {
		sliderThree.style.right = parseInt(sliderThree.style.right) - 490 + 'px';
	} else {
		sliderThree.style.right -= 490 + 'px';
	}
});

rightThree.addEventListener('click', function(){
	if(sliderThree.style.right) {
		if (parseInt(sliderThree.style.right) == 980) {
			sliderThree.style.right = '0';
		} else {
			sliderThree.style.right = parseInt(sliderThree.style.right) + 490 + 'px';
		}
	} else {
		sliderThree.style.right += 490 + 'px';
	}
});