// var a = 3; // Вводим число преращаем к типу number

// if (a == "") {
//  alert ('Введите число' + a + 'неправильно');
// } 

// Задаем проверку числа на тип number
// if (isNaN(a)) {
//   alert ('Введите число' + a + 'неправильно');
//   } else {
//   console.log ( pow(a, n) );
// }

// // var n = 4; // Вводим степень числа преращаем к типу number

// // if (n == "") {
// //  alert ('Введите степень' + n + 'неправильно');
// // } 

// // Задаем проверку степени числа на тип number
// if (isNaN(n)) {
//   alert ('Введите число' + n + 'неправильно');
//   } else {
//   console.log ( pow(a, n) );
// }

// var resultFn = pow(a, n);

// функция возведения в степень
var resultFn = function pow(a, n) {

    var result = a;

    for (var i = 1; i < Math.abs(n); i++) { // возводим в степень 
      
      if (n > 0) { // если степень больше 0

        result *=a;
      }  
    }

    switch (n) { // если степень равно 0
      case 0:
      result = 1;
      break;
    }

 //    if (n = ) {
  //  result = 1;
  // }

    if (n < 0) { // если степень меньше 0
      result = 1/result; 
  } 

    if (a < 0) {
        result = -result;
    }

  return result; // возвращаем результат в функцию
}

module.exports = resultFn;