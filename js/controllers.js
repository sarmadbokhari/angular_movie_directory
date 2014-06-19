var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.movies = data;
    $scope.movieOrder = "title";
  });
}]);

movieControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('js/data.json').success(function(data){
    $scope.movies = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0){
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.movies.length-1;
    }

    if ($routeParams.itemId < $scope.movies.length-1){
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);
