var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', function($scope){
  $scope.movies = [
  {
    "backdrop_path": null,
    "id": 132179,
    "original_title": "The Prince of Town",
    "release_date": "2011-09-01",
    "poster_path": "/cvSTHeXmNOVcS5Vc90yzuYZApw5.jpg",
    "title": "The Prince of Town",
    "vote_average": 9.3,
    "vote_count": 12
  },
  {
    "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
    "id": 238,
    "original_title": "The Godfather",
    "release_date": "1972-03-24",
    "poster_path": "/d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
    "title": "The Godfather",
    "vote_average": 9.2,
    "vote_count": 125
  },
  {
    "backdrop_path": "/xa2rJIU0Bs56b9ek9ZuAcRe2S2k.jpg",
    "id": 914,
    "original_title": "The Great Dictator",
    "release_date": "1940-10-15",
    "poster_path": "/Wk1ideXjlGYVCtRwOiLmuC9uyu.jpg",
    "title": "The Great Dictator",
    "vote_average": 9.2,
    "vote_count": 16
  }
  ]
});
