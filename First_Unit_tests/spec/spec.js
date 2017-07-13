var resultFn = require('../js/app.js')

describe("resultFn", function() {

  it("it should computation result", function() { // проверка на положительную стпень числа - выполняется ОК
  // 	prepare
  	var calTests1;
  // 	act
  	var calTests1 = resultFn(2, 2);
  // 	assert 
    expect(calTests1).toEqual(4); 
  });

    it("it should computation result", function() { /* проверка на отрицательную степень числа - 
    	                                               не выполняется NОК выдает Expected 0,5 toBe 0,0625 погрешность вычеслений..скорей всего 
    	                                               ошибся в цикле.. c проверкой переменных */
  // 	prepare
  	var calTests2;
  // 	act
  	var calTests2 = resultFn(2, -2);
  // 	assert 
    expect(calTests2).toBe(0.25);
  });

    it("it should computation result", function() { // тут все ОК выполняется на степень 0
  // 	prepare
  	var calTests3;
  // 	act
  	var calTests3 = resultFn(2, 0);
  // 	assert 
    expect(calTests3).toBe(1);
  });

    it("it should computation result", function() { // проверка на (-) число опять я просчитался с условием if задал не в теле цикла... 
  // 	prepare
  	var calTests4;
  // 	act
  	var calTests4 = resultFn(-2, 3);
  // 	assert 
    expect(calTests4).toBe(-8);
  });
});