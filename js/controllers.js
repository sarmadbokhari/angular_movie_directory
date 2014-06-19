var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.movies = data;
    $scope.movieOrder = "title";
  });
}]);
