'use strict';
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

	let html = tmplInsert(item);
	$('.test-box').append(html);
});

// Проверка правильности ответов
$('#test-box-button').click(function (elem) {

 	let resultTest = $('.test-box').serializeArray(); // преобразуем форму в массив и присваеваем в переменную

 	console.log(resultTest);

 	elem.preventDefault(); // прерывание отправки данных на сервер

    resultTest.forEach(function (item, i) {

    	let answer = eval(item.name);
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