var first_array = [1,2,3,4]

var second_array = [1,1,1,1,1,1,23,4,5,66,8,9,8,9]


describe('Compact Array', function(){
	it('should return array without duplicates', function(){
		expect(compact_array(first_array)).toEqual(first_array)
	})

	it('should return error message', function(){
		expect(compact_array([])).toEqual("Invalid input")
	})

	it('should return error message', function(){
		expect(compact_array()).toEqual("Invalid input")
	})

	it('should return error message', function(){
		expect(compact_array(second_array)).toEqual([1,23,4,5,66,8,9])
	})	
})

 
