/**
 * 电影列表路由模块
 */
angular.module('moviecatApp.routes.movie_lists',[
  'moviecatApp.controllers.movie_lists'
])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('movie.in_theaters', {
    url: '/in_theaters',
    views: {
      'movie-movie_lists': {
        templateUrl: 'areas/movie_lists/index.html',
        controller: 'MovieListsCtrl'
      }
    }
  }).state('movie.coming_soon', {
    url: '/coming_soon',
    views: {
      'movie-coming_soon': {
        templateUrl: 'areas/movie_lists/index.html',
        controller: 'MovieListsCtrl'
      }
    }
  }).state('movie.top250', {
    url: '/top250',
    views: {
      'movie-top250': {
        templateUrl: 'areas/movie_lists/index.html',
        controller: 'MovieListsCtrl'
      }
    }
  }).state('search', {
    url: '/movie/search/:q',
    templateUrl: 'areas/movie_lists/search.html',
    controller: 'MovieListsCtrl'
  })
}])
