angular.module('lazymodule1', [])
	.controller('lazyController1', ['$scope', function($scope){
		$scope.test1 = "Hey again1";
		$scope.myData1 = [{name: "Moroni", age: 50},
		                     {name: "Tiancum", age: 43},
		                     {name: "Jacob", age: 27},
		                     {name: "Nephi", age: 29},
		                     {name: "Enos", age: 34}];
    	$scope.gridOptions1 = { data: 'myData1' };
}]);