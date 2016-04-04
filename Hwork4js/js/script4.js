var app = {
	  questions: 
	  [
	    {
	    	title: '1.Вопрос №1',
	    	answers: [
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №1</input>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №2</input>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №3</input>',
	    	    correct: true
	    	  }
	       ]
	     },
	     {
	    	title: '2.Вопрос №2',
	    	answers: [
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №1</input>',
	    	    correct: true
	    	  },
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №2</input>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №3</input>',
	    	    correct: false
	    	  }
	       ]
	     },
	     {
	    	title: '3.Вопрос №3',
	    	answers: [
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №1</input>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №2</input>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<input type = "checkbox" id = "answer-text" value = "answer">Вариант ответа №3</input>',
	    	    correct: true
	    	  }
	       ]
	     }	   
	   ],



	   generateElement: function () {

	   	var elDiv = document.createElement('div');
	   		elDiv.classList.add('test-box');
	   	var body = document.querySelector('body');
			body.appendChild(elDiv);

	   	var elTitle = document.createElement('p');
	   		elTitle.classList.add('test-box-head');
	   		elTitle.innerHTML = 'Тест по программированию'
	   	var div = document.querySelector('div');
			div.appendChild(elTitle);


	for(var i = 0; i < this.questions.length; i++)
	{
		var question = this.questions[i];

		console.log(question);
		var question = document.createElement('p');
			question.classList.add('question-text');
			question.innerHTML = this.questions[i].title;
		var div = document.querySelector('div');
			div.appendChild(question);
		console.log(answer);
		

			console.log(question);




		for(var y = 0; y < this.questions[i].answers.length; y++)
		{ 
		var answer = this.questions[i].answers[y];
		var answer = document.createElement('label');	
			answer.classList.add('answer-text-label')
			answer.htmlFor = 'answer-text';
			answer.innerHTML = this.questions[i].answers[y].text;
		// var label = document.querySelector('label')
		// 	label.appendChild(answer);
		// var labelCheck = document.createElement('label');
		// 	labelCheck.htmlFor = 'answer-text';
		// 	labelCheck.appendChild(answer);
		// 	labelCheck.classList.add('answer-text-label');
		//  labelCheck.appendChild(document.createTextNode(this.questions[i].answers[y].text));
		// var input = document.querySelectorAll('input');
		// 	input[0].appendChild(labelCheck);
		var div = document.querySelector('div');
			div.appendChild(answer);
		// var input = document.createElement('input');
		// 	input.type = 'checkbox';
		// 	input.value = 'answer';
		// 	input.id = 'answer-text';
		// 	input.innerHTML = this.questions[i].answers[y].text;
		// var label = document.querySelectorAll('label')
		// 	label[i].appendChild(input);	

		console.log(answer);

		// var answer = document.createElement('input');
		// 	answer.type = 'checkbox';
		// 	answer.value = 'answer';
		// 	answer.id = 'answer-text';
		// var answer = document.createElement('label');
		// 	answer.htmlFor = 'answer-text';
		// 	answer.classList.add('answer-text-label');
		// 	answer.appendChild(document.createTextNode(this.questions[i].answers[y].text));
		// 	answer.innerHTML = this.questions[i].answers[y].text;
		// var div = document.querySelector('div');
		// 	div.appendChild(answer);
		// console.log(answer);		
		}
	}

	var elButton = document.createElement('input');
	   	elButton.classList.add('test-box-button');
	   	elButton.setAttribute('type', 'submit');
	   	elButton.value = 'Проверить мои результаты'
	var body = document.querySelector('div');
		body.appendChild(elButton);

}


	  }

app.generateElement();
// console.log (question);

	   /*	createQuestion: function (testQuestion) {
	   		
	  		for (var i = 0; i < this.question.length; i++)
	  			var questions = this.question[i];

		
	  		/*for(var y = 0; y < questions.answers.length(); y++)
	  		{
	  			console.log('Position № ' + y + ' -- ' + questions[1].answers[y].text);
	  		}*/

	  		
	 
	  
	 


	// Блок формы

 // 	var element = document.createElement ('div');
	// 	element.classList.add('test');
	// var body = document.querySelector('body');
	// 	body.appendChild(element);
	
	// // Заголовок формы

	// var elementHead = document.createElement ('p');
	// 	elementHead.classList.add('test-head');
	// 	elementHead.innerHTML = 'Тест по программированию';
	// var body = document.querySelector('body');
	// 	body.appendChild(elementHead);
		
	// // Форма

	// var elementForm = document.createElement ('form');
	// 	elementForm.classList.add('test-form');
	// var div = document.querySelector('div');
	// 	div.appendChild(elementForm);

	// // Вопрос №1

	// var elementQuestion = document.createElement ('p');
	// 	elementQuestion.classList.add('test-form-question');
	// 	elementQuestion.innerHTML = '1.Вопрос №1';
	// var form = document.querySelector('.test-form');
	// 	form.appendChild(elementQuestion);

	// // Вопрос №1

	// var elementQuestion = document.createElement ('p');
	// 	elementQuestion.classList.add('test-form-question');
	// 	elementQuestion.innerHTML = '2.Вопрос №2';
	// var form = document.querySelector('.test-form');
	// 	form.appendChild(elementQuestion);

	// // Вопрос №3

	// var elementQuestion = document.createElement ('p');
	// 	elementQuestion.classList.add('test-form-question');
	// 	elementQuestion.innerHTML = '3.Вопрос №3';
	// var form = document.querySelector('.test-form');
	// 	form.appendChild(elementQuestion);

	// // Варианты ответов к "Вопрос №1"

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant11" name="box">Вариант ответа №1</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[0].appendChild(elementAnswer);

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant12" name="box">Вариант ответа №2</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[0].appendChild(elementAnswer);

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant13" name="box">Вариант ответа №3</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[0].appendChild(elementAnswer);

	// // Варианты ответов к "Вопрос №2"

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant21" name="box">Вариант ответа №1</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[1].appendChild(elementAnswer);

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant22" name="box">Вариант ответа №2</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[1].appendChild(elementAnswer);

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant23" name="box">Вариант ответа №3</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[1].appendChild(elementAnswer);	
	
	// // Варианты ответов к "Вопрос №3"

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant31" name="box">Вариант ответа №1</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[2].appendChild(elementAnswer);

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant32" name="box">Вариант ответа №2</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[2].appendChild(elementAnswer);

	// var elementAnswer = document.createElement ('p');
	// 	elementAnswer.classList.add('test-form-question-answer');
	// 	elementAnswer.innerHTML = '<label><input type="checkbox" id="variant" value="variant33" name="box">Вариант ответа №3</input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[2].appendChild(elementAnswer);

	// // Кнопка отправки формы

	// var elementButton = document.createElement ('div');
	// 	elementButton.classList.add('test-button');
	// 	elementButton.innerHTML = '<label><input type="button" id="test-button" value="Проверить мои результаты"></input></label>';
	// var form = document.querySelectorAll('.test-form-question');
	// 	form[2].appendChild(elementButton);	
