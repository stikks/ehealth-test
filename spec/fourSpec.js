var List = [1, 2, 3, 4, 5, 6]

describe('Rotate', function(){
	it('should rotate array by number N', function(){
		expect(rotate(List, 2)).toEqual([5, 6, 1, 2, 3, 4])
	})
}) 
