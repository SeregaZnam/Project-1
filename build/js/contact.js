var submit     = document.getElementById('submit');
var formInfo   = document.forms['form_info'];
var inputName  = formInfo.elements.name;
var inputEmail = formInfo.elements.email;
var message    = formInfo.elements.message;
var reg        = /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/;
var flag 	   = false;

submit.addEventListener('click', function(event){
	
	if(inputName.length < 3 || inputName.value == '') {
		inputName.style.outline = '1px solid red';
	}

	if(!reg.test(inputEmail.value)) {
		inputEmail.style.outline = '1px solid red';
	}

	if(message.value == '') {
		message.style.outline = '1px solid red';
	}

	if(inputName.length < 3 || !reg.test(inputEmail.value) || message.value == '') {
		if(flag){
			event.preventDefault();
			return;
		} else {
			document.getElementById('test').insertAdjacentHTML('afterBegin', '<div class="alert alert-danger">Поля выделенные красным заполнены некорректно</div>');
			flag = true;
			event.preventDefault();
		}
	}
});