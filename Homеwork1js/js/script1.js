function pow(a, n) {
    var result = a;

    for (var i = 1; i < n; i++) {
    	result *= a;
    }

    	return result;
}

var a = prompt("a?", '');
var n = prompt("n?", '');

if (n <= 1) {
	alert ('Введите степень' + n + 'неправильно');
} else {
	console.log ( pow(a, n) );
}