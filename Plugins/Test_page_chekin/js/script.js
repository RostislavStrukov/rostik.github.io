"use stric"; // проверка совремееным стандартам ES6

// данные
var questions = [
	    {
	    	title: '1.Выберите правильный метод для преобразования объекта в JSON формат:',
	    	answers: ['parse()','stringify()','toJSON()'],
        	correct: 1
	    },
	    {
	    	title: '2.Для чего используется конструкция try-catch в javascript?',
	    	answers: ['Для обработки возможных ошибок','Для замены условного оператора if','В строгом режиме весь код необходимо оборачивать в try-catch'],
        	correct: 0
	    },
	    {
	    	title: '3.Какие основное ограничения к объявлению переменных в строгом режиме?',
	    	answers: ['Переменные функций должны объявляться с использованием ключевого слова var','Глобальные переменные должны объявляться с использованием ключевого слова var','Любая переменная должна объявляться с использованием ключевого слова var'],
        	correct: 2
	    },	   
]

$(function() {

// запись localStorage
localStorage.setItem('form', JSON.stringify(questions));

var form = localStorage.getItem('form');
form = JSON.parse(form);
// console.log(form);

// заполнение html DOM елементами
var tmpl = $('#form-tmpl').html();
var tmplInsert = _.template(tmpl);

questions.forEach(function (item, i) {

	item.questionIndex = i;

	var html = tmplInsert(item);
	$('.test-box').append(html);
});

// Проверка правильности ответов
$('#test-box-button').click(function (elem) {

 	var resultTest = $('.test-box').serializeArray(); // преобразуем форму в массив и присваеваем в переменную

 	console.log(resultTest);

 	elem.preventDefault(); // прерывание отправки данных на сервер

    resultTest.forEach(function (item, i) {

    	var answer = eval(item.name);
    	questions[answer.questionIndex].result = (answer.correct == item.value) ? true : false; // Сравнение правильности ответов
    });

    var testValid = true;

    // Вставка результатов в модальное окно
    questions.forEach(function (item, index) {
    	switch (item.result) {
      		case true:
        		item.result = 'Правильно';
        		break
      		case false:
        		item.result = 'Неправильно';
        		testValid = false;
        		break
      		case undefined:
        		item.result = 'Вопрос не отвечен';
        		testValid = false;
        		break
      }

      var tmplResult = $('#result-tmpl').html();
  	  var tmplResultInsert = _.template(tmplResult);
      var html = tmplResultInsert(item);

      $('.modal-list-result').append(html);
    });

    var html = (testValid) ? '<span class="result-text">Тест пройден!</span>' : '<span class="result-text">Тест не пройден</span>'
    $('.modal .modal-footer').append(html);
    $('.modal').show();
});

// Кнопка закрытие окна
$('.close').click(function () {
$('.modal').hide();
    location.reload();
});
});





//   // проверка результатов
//   $('#test-box-button').click(function (elem) {
//     var resultTest = $('.test-box').serializeArray();
//     console.log(resultTest);
//     elem.preventDefault(); // прерываем отправку формы на сервер
//     resultTest.forEach(function (item, i) {
//     var question = eval(item.name);
//     var indexData = questions[i].answers[y];
//     questions[question.indexData].result = (question.correct == item.value) ? true : false;
//     console.log(indexData);
//   });
//   });

//   // выводим результат теста - модальное окно


//     questions.forEach(function (item, index) {
//       switch (item.result) {
//       case undefined:
//         item.result = 'Вопрос не отвечен';
//         testPassed = false;
//         break
//       case true:
//         item.result = 'Правильно';
//         break
//       case false:
//         item.result = 'Неправильно';
//         testPassed = false;
//         break
//       }
//   var html = $('#resultModal .modal-body ol').html();
//   var insert = tmpl(html, {
//     item
//   });
//       console.log(item);

//   });

// });







// app.generateElement();

// localStorage.setItem('form', JSON.stringify(app));

// var form = localStorage.getItem('form');

// console.log(form);





	  //  generateElement: function () {

	  //  	 var elDiv = document.createElement('form');
			//  elDiv.classList.add('test-box');

	  //  	 var body = document.querySelector('body');
			//  body.appendChild(elDiv);

	  //  	 var elTitle = document.createElement('p');
	  //  		 elTitle.classList.add('test-box-head');
	  //  		 elTitle.innerHTML = 'Тест по программированию'

	  //  	 var form = document.querySelector('form');
			//  form.appendChild(elTitle);


		 // for(var i = 0; i < this.questions.length; i++) {
			
			//  var question = this.questions[i];
		
			//  var question = document.createElement('p');
			// 	 question.classList.add('question-text');
			// 	 question.innerHTML = this.questions[i].title;

			//  var form = document.querySelector('form');
			// 	 form.appendChild(question);
			
			//  for(var y = 0; y < this.questions[i].answers.length; y++) {
		 
			// 	 var answer = this.questions[i].answers[y];
			 
			// 	 var answer = document.createElement('label');
			// 	 	 answer.htmlFor = 'answer-text';
			// 		 answer.innerHTML = this.questions[i].answers[y].text;

			// 	 var input = document.createElement('input');
			// 		 input.setAttribute('type', 'checkbox');
			// 		 input.id = 'answer-text';

			// 	 var form = document.querySelector('form');
			// 	 	 form.appendChild(input);
			// 	     form.appendChild(answer);

		 //     }

	  //    }

		 // var elButton = document.createElement('input');
			//  elButton.classList.add('test-box-button');
			//  elButton.setAttribute('type', 'submit');
			//  elButton.value = 'Проверить мои результаты'
			 
		 // var form = document.querySelector('form');
			//  form.appendChild(elButton);

	  //  }