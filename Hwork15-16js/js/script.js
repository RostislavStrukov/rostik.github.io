// создание конструкторов классов 
function Human() {
	this.name = 'Ivan',
	this.age = 30,
	this.sex = 'male',
	this.height = 190,
	this.weight = 90
}

function Worker() {
	this.placeWork = 'Company',
	this.salary = 3000,
	this.work = function() {
		alert('He working');
	}
}

function Student() {
	this.placeStudy = 'Universaty',
	this.studyBursary = 3000,
	this.study = function() {
		alert('He studying');
	}
}

// сохранение методов экземпляров классов 
Student.prototype = new Worker;
Human.prototype = new Student;

// создания экземпляров классов
var newHuman = new Human();
var newWorker = new Student();

// вывод данных
newHuman.study();
console.log('newWorker.placeStudy', newWorker.placeStudy);
console.log('newHuman.studyBursary', newHuman.studyBursary);

// Human = {
// 	name: 'Ivan',
// 	age: 30,
// 	sex: 'male',
// 	height: 190,
// 	weight: 90
// }

// Student = {
// 	placeStudy: 'Universaty',
// 	studyBursary: 1000,
// 	watch: function() {
// 		alert('He watching film');
// 	}
// }

// Worker = {
// 	placeWork: 'Company',
// 	salary: 3000,
// 	work: function() {
// 		alert('He working');
// 	}
// }

// Human.__proto__ = Student;

// console.log('Human.placeStudy', Human.placeStudy);

// function YahooDemo () {
// 	console.log('arguments', arguments)
// }

// $.getJSON("http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=YahooDemo&output=json&query=PHP&callback=?",
// function(data){
//     var ul = document.createElement("ul");
//     $.each(data.ResultSet.Result, function(i, val){
//            var li = document.createElement("li");
//             var inner = '<a href="'+val.Url+'" title="'+val.Url+'" target="_blank">'+val.Title+"</a>";
//             if (val.Summary != "" && val.Summary != "undefined") {
//                 inner += " - "+val.Summary;
//             }
//             li.innerHTML = inner;                               
//             ul.appendChild(li);
//     });
//     $('body').html(ul);
// });

// $(function(){
// 	$.ajax({
// 	            // AJAX-specified URL
// 	           url: "http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=YahooDemo&output=json&query=PHP&callback=?",
// 	           dataType : "jsonp",
// 	           // Handle the success event
// 	           success: function (data) {
// 	               // equal to previuos example
// 	               // ...
// 	           }
// 	});
// });