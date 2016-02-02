var string_one = "hell";
var string_two = "boy"
var string_three = "yelp"
var string_four = "cleft"


describe('Intersect Strings', function(){
	it('should return "ell"', function(){
		expect(find_chars_nn(string_one, string_three)).toEqual("ell");
	})

	it('should return "ell"', function(){
		expect(find_chars_n(string_one, string_three)).toEqual("ell");
	})	

	it('should return ""', function(){
		expect(find_chars_nn(string_one, string_two)).toEqual("");
	})

	it('should return "el', function(){
		expect(find_chars_nn(string_three, string_four)).toEqual("el");
	})

	it('should return "el', function(){
		expect(find_chars_nn(string_three, string_four)).toEqual("el");
	})
})


