var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
   $scope.myData = [];  
   $http.get('http://apis.is/concerts').
    success(function(data, status, headers, config) {
     .then(function(result) {
                $scope.myData = data;
                $scope.imageSource = 'imageSource';
             });
    })

}]);