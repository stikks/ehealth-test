var app = angular.module('DemoApp', ['pouchdb']);

app.controller('AppController', function($scope, pouchDB, $rootScope){
	db = $rootScope.db

	$scope.note = {}

	$scope.data = {
		"notes": []
	}

	$scope.search=function(note_name){
		db.get(note_name).then(function (doc) {
			console.log(doc)			
		}).catch(function (err) {
			$scope.message = 'Error: '.concat(err.message);
		});
	}

	$scope.search("Steve")
	
	function map(doc) {
	  // sort by name and description
	  emit([doc.name, doc.description]);
	}
	db.query(map).then(function (result) {
	  // store result in addresses scope
	  $scope.data.notes = result.rows
	}).catch(function (err) {
	  $scope.message = err;
	});

	$scope.destroy_db = function() {
		db.destroy('demoDB')
	}

	$scope.save = function() {
		$scope.note._id = $scope.note.name
		db.put($scope.note).then(function(response){
			$scope.message = 'Address registered'
			$scope.note = null
		}).catch(function(err){
			$scope.message = "Address saving failed"
		})
	}
})

app.run(function(pouchDB, $rootScope){
  var db = new pouchDB('demoDB')
  $rootScope.db = db
});