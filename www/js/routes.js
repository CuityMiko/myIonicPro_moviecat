/**
 * 路由配置模块，所有路由都会注入在此处
 */
angular.module('moviecatApp.routes',[
  'moviecatApp.routes.tab', // tabs模块路由
  'moviecatApp.routes.movie_lists' // 电影列表路由模块
])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/movie/in_theaters/1');
}])
