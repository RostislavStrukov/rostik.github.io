var app = {
	  questions: 
	  [
	    {
	    	title: '1.Вопрос №1',
	    	answers: [
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer11">Вариант ответа №1</input></label>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer12">Вариант ответа №2</input></label>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer13">Вариант ответа №3</input></label>',
	    	    correct: true
	    	  }
	       ]
	     },
	     {
	    	title: '2.Вопрос №2',
	    	answers: [
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer21">Вариант ответа №1</input></label>',
	    	    correct: true
	    	  },
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer22">Вариант ответа №2</input></label>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer23">Вариант ответа №3</input></label>',
	    	    correct: false
	    	  }
	       ]
	     },
	     {
	    	title: '3.Вопрос №3',
	    	answers: [
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer31">Вариант ответа №1</input></label>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer32">Вариант ответа №2</input></label>',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '<label><input type = "checkbox" id = "answer-text-content" value = "answer33">Вариант ответа №3</input></label>',
	    	    correct: true
	    	  }
	       ]
	     }	   
	   ],

	   generateElement: function () {

	   	 var elDiv = document.createElement('form');
	   		 elDiv.classList.add('test-box');
	   	 var body = document.querySelector('body');
			 body.appendChild(elDiv);

	   	 var elTitle = document.createElement('p');
	   		 elTitle.classList.add('test-box-head');
	   		 elTitle.innerHTML = 'Тест по программированию'
	   	 var form = document.querySelector('form');
			 form.appendChild(elTitle);


		 for(var i = 0; i < this.questions.length; i++) {
			
			 var question = this.questions[i];

		 console.log(question);
		
			 var question = document.createElement('p');
				 question.classList.add('question-text');
				 question.innerHTML = this.questions[i].title;
			 var form = document.querySelector('form');
				 form.appendChild(question);
			
		 console.log(answer);
		

			for(var y = 0; y < this.questions[i].answers.length; y++) {
		 
				 var answer = this.questions[i].answers[y];
			 
/* 				 var answer = document.createElement('p');
					 answer.classList.add('answer-text');
					 answer.innerHTML = this.questions[i].answers[y].text;
				 var form = document.querySelector('form');
					 form.appendChild(answer); */
			
		
				 var answer = document.createElement('label');
					 answer.htmlFor = 'answer-text';
				 var form = document.querySelector('form');
					 form.appendChild(answer);
				 var input = document.createElement('input');
					 input.type = 'checkbox';
					 input.value = 'answer';
					 input.id = 'answer-text';
					 input.innerHTML = this.questions[i].answers[y].text;
				 var label = document.querySelectorAll('label')
				     label.appendChild(input);	

			 console.log(answer);

		    }
	     }

		 var elButton = document.createElement('input');
			 elButton.classList.add('test-box-button');
			 elButton.setAttribute('type', 'submit');
			 elButton.value = 'Проверить мои результаты'
		 var form = document.querySelector('form');
			 form.appendChild(elButton);

	   }
}

app.generateElement();