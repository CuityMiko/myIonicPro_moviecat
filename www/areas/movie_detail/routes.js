/**
 * 电影详情路由模块
 */
angular.module('moviecatApp.routes.movie_detail',['moviecatApp.controllers.movie_detail'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('detail',{
    url:'/movie/detail/:id',
    templateUrl:'areas/movie_detail/index.html',
    controller:'MovieDetailCtrl'
  })
}])
