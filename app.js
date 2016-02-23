var myApp = angular.module('myApp',[]);

// data

var app = {

	cash : 40,
	fruits : [{'item': 'Orange', 'price': 25},{'item': 'Apple', 'price': 32},{'item': 'Banana', 'price': 10}]
	
}

// controllers

myApp.controller('Bands', ['$scope', function($scope){
  	$scope.bands=['Death Cab','Radiohead','Postal Service','Brand New', 'Taking Back Sunday'];
}]);

myApp.controller('Fruits', ['$scope', function($scope){
	$scope.fruits = app.fruits;
	$scope.total = app.fruits[0].price + app.fruits[1].price + app.fruits[2].price;
	$scope.cash = app.cash;
}]);

