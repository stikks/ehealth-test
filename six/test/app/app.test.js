describe('AppController', function(){
    var scope;//we'll use this scope in our tests
 
    //mock Application to allow us to inject our module
    beforeEach(angular.mock.module('DemoApp'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('AppController', {$scope: scope});
    })
    );
    
    it('should create a db with name "demoApp"', inject(function(pouchdb) {		

      var result;

	  pouchdb.info(function(err, res) {
	    expect(res.db_name).toEqual('_pouch_demoApp');
	  });
	}));

	it('should add a note with _id test to the pouch database; demoApp', inject(function(pouchdb){

		var note = {"_id": 'test', "name": 'Fred Rooster', "description": "The Curious case of Fred Rooster is one that leaves one both charmed and disturbed"}

		pouchdb.put(note).then(function(response){
			expect(response.ok).toBeTruthy();
		})

	}));

}) 
