angular.module('lazymodule2', [])
	.controller('lazyController2', ['$scope', function($scope){
		$scope.test2 = "Hey again2";
		$scope.myData2 = [{name: "Moroni", age: 50},
		                     {name: "Tiancum", age: 43},
		                     {name: "Jacob", age: 27},
		                     {name: "Nephi", age: 29},
		                     {name: "Enos", age: 34}];
    	$scope.gridOptions2 = { data: 'myData2' };
}]);