var app = angular.module('app', []);
console.log('app is loading!');
app.controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
	console.log('control ran!');
    $scope.myData = [];  
    $http.get('http://apis.is/concerts').
    success(function(data, status, headers, config, results) {
	    console.log('success!');
	    $scope.myData = data.results;
	});
}]);