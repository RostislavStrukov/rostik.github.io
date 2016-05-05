var app = {
	  questions: 
	  [
	    {
	    	title: '1.Вопрос №1',
	    	answers: [
	    	  {
	    	    text: 'Вариант ответа №1',
	    	    correct: false
	    	  },
	    	  {
	    	    text: 'Вариант ответа №2',
	    	    correct: false
	    	  },
	    	  {
	    	    text: 'Вариант ответа №3',
	    	    correct: true
	    	  }
	       ]
	     },
	     {
	    	title: '2.Вопрос №2',
	    	answers: [
	    	  {
	    	    text: 'Вариант ответа №1',
	    	    correct: true
	    	  },
	    	  {
	    	    text: 'Вариант ответа №2',
	    	    correct: false
	    	  },
	    	  {
	    	    text: 'Вариант ответа №3',
	    	    correct: false
	    	  }
	       ]
	     },
	     {
	    	title: '3.Вопрос №3',
	    	answers: [
	    	  {
	    	    text: 'Вариант ответа №1',
	    	    correct: false
	    	  },
	    	  {
	    	    text: 'Вариант ответа №2',
	    	    correct: false
	    	  },
	    	  {
	    	    text: 'Вариант ответа №3',
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
		
			 var question = document.createElement('p');
				 question.classList.add('question-text');
				 question.innerHTML = this.questions[i].title;

			 var form = document.querySelector('form');
				 form.appendChild(question);
			
			 for(var y = 0; y < this.questions[i].answers.length; y++) {
		 
				 var answer = this.questions[i].answers[y];
			 
				 var answer = document.createElement('label');
				 	 answer.htmlFor = 'answer-text';
					 answer.innerHTML = this.questions[i].answers[y].text;

				 var input = document.createElement('input');
					 input.setAttribute('type', 'checkbox');
					 input.id = 'answer-text';

				 var form = document.querySelector('form');
				 	 form.appendChild(input);
				     form.appendChild(answer);

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