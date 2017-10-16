var left   = document.getElementById('scroll_left_one');
var right  = document.getElementById('scroll_right_one');
var slider = document.getElementById('slider-items_one');

left.addEventListener('click', function(){
	if(parseInt(slider.style.right) > 0) {
		slider.style.right = parseInt(slider.style.right) - 250 + 'px';
	} else {
		slider.style.right -= 250 + 'px';
	}
});

right.addEventListener('click', function(){
	if(slider.style.right) {
		if (parseInt(slider.style.right) == 1000) {
			slider.style.right = '0';
		} else {
			slider.style.right = parseInt(slider.style.right) + 250 + 'px';
		}
	} else {
		slider.style.right += 250 + 'px';
	}
});