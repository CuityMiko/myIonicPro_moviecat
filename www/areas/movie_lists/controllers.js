/**
 * 电影列表控制器模块
 */
angular.module('moviecatApp.controllers.movie_lists',['moviecatApp.services.movie_lists'])
  .controller('MovieListsCtrl',['$scope','$stateParams','MovieListsFcty','$state',function($scope,$stateParams,MovieListsFcty,$state){
    $scope.classify='';
    switch ($state.current.name) {
      case 'movie.in_theaters':
        $scope.classify='正在热映';
        break;
      case 'movie.coming_soon':
        $scope.classify='即将上映';
        break;
      case 'movie.top250':
        $scope.classify='Top250';
        break;
      default:
        $scope.classify='正在热映';
        break;
    }
  }])
