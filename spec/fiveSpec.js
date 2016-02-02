var array_one = [5,10];
var array_two = [1,2,3,4,5]


describe('LCM of a list of integers', function(){
	it('should return integer result', function(){
		expect(LCM(array_one)).toEqual(10);
	})

	it('should return integer result', function(){
		expect(LCM(array_two)).toEqual(60);
	})	

	it('should return error message', function(){
		expect(LCM([])).toEqual("Invalid input");
	})

	it('should return error message', function(){
		expect(LCM()).toEqual("Invalid input");
	})
})


 
