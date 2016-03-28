 	
 	// Блок формы

 	var element = document.createElement ('div');
		element.classList.add('test');
	var body = document.querySelector('body');
		body.appendChild(element);
	
	// Заголовок формы

	var elementHead = document.createElement ('p');
		elementHead.classList.add('test-head');
		elementHead.innerHTML = 'Тест по программированию';
	var div = document.querySelector('.test');
		div.appendChild(elementHead);
		
	// Форма

	var elementForm = document.createElement ('form');
		elementForm.classList.add('test-form');
	var div = document.querySelector('div');
		div.appendChild(elementForm);

	// Вопрос №1

	var elementQuestion = document.createElement ('p');
		elementQuestion.classList.add('test-form-question');
		elementQuestion.innerHTML = '1.Вопрос №1';
	var form = document.querySelector('.test-form');
		form.appendChild(elementQuestion);

	// Вопрос №1

	var elementQuestion = document.createElement ('p');
		elementQuestion.classList.add('test-form-question');
		elementQuestion.innerHTML = '2.Вопрос №2';
	var form = document.querySelector('.test-form');
		form.appendChild(elementQuestion);

	// Вопрос №3

	var elementQuestion = document.createElement ('p');
		elementQuestion.classList.add('test-form-question');
		elementQuestion.innerHTML = '3.Вопрос №3';
	var form = document.querySelector('.test-form');
		form.appendChild(elementQuestion);

	// Варианты ответов к "Вопрос №1"

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant11" name="box">Вариант ответа №1</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[0].appendChild(elementAnswer);

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant12" name="box">Вариант ответа №2</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[0].appendChild(elementAnswer);

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant13" name="box">Вариант ответа №3</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[0].appendChild(elementAnswer);

	// Варианты ответов к "Вопрос №2"

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant21" name="box">Вариант ответа №1</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[1].appendChild(elementAnswer);

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant22" name="box">Вариант ответа №2</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[1].appendChild(elementAnswer);

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant23" name="box">Вариант ответа №3</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[1].appendChild(elementAnswer);	
	
	// Варианты ответов к "Вопрос №3"

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant31" name="box">Вариант ответа №1</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[2].appendChild(elementAnswer);

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant32" name="box">Вариант ответа №2</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[2].appendChild(elementAnswer);

	var elementAnswer = document.createElement ('p');
		elementAnswer.classList.add('test-form-question-answer');
		elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant33" name="box">Вариант ответа №3</input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[2].appendChild(elementAnswer);

	// Кнопка отправки формы

	var elementButton = document.createElement ('div');
		elementButton.classList.add('test-button');
		elementButton.innerHTML = '<label><input type="button" id="test-button" value="Проверить мои результаты"></input></label>';
	var form = document.querySelectorAll('.test-form-question');
		form[2].appendChild(elementButton);

	console.log(body);	