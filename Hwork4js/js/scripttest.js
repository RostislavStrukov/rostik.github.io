//console.log ('Hello world');
//alert ('question');
//alert( 'ПStart' );
var app = {
	  question: 
	  [
	    {
	    	title: '1.Вопрос №1',
	    	answers: [
	    	  {
	    	    text: '1 Вариант ответа №1',
	    	    correct: true
	    	  },
	    	  {
	    	    text: '1 Вариант ответа №2',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '1 Вариант ответа №3',
	    	    correct: true
	    	  }
	       ]
	     },
	     {
	    	title: '2.Вопрос №2',
	    	answers: [
	    	  {
	    	    text: '2 Вариант ответа №1',
	    	    correct: true
	    	  },
	    	  {
	    	    text: '2 Вариант ответа №2',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '2 Вариант ответа №3',
	    	    correct: true
	    	  }
	       ]
	     },
	     {
	    	title: '3.Вопрос №3',
	    	answers: [
	    	  {
	    	    text: '3 Вариант ответа №1',
	    	    correct: true
	    	  },
	    	  {
	    	    text: '3 Вариант ответа №2',
	    	    correct: false
	    	  },
	    	  {
	    	    text: '3 Вариант ответа №3',
	    	    correct: true
	    	  }
	       ]
	     }	   
	   ],		  

	  }

// var a = app;
function MyFunc () {
	for(var i = 0; i < app.question.length; i++)
	{
		console.log(app.question[i].title);
		for(var y = 0; y < app.question[i].answers.length; y++)
		{
				console.log(app.question[i].answers[y].text + ' ' + app.question[i].answers[y].correct);
		}
	}

}
MyFunc();
	

