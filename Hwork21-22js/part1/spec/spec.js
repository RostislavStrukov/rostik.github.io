var pow require('../js/script.js')

describe("degResult", function() {
  it("it should computation result", function() {

  	// prepare
  	var result;

  	// act
  result = pow(3, 4);
  	// assert 
    expect(result).toEqual(3, 4);
  });
});