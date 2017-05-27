/**
 * 路由配置模块，所有路由都会注入在此处
 */
angular.module('moviecatApp.routes',[
  'moviecatApp.routes.guidepage', //引导页
  'moviecatApp.routes.tab', // tabs模块路由
  'moviecatApp.routes.movie_lists', // 电影列表路由模块
  'moviecatApp.routes.movie_detail' // 电影详情
])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/guidepage');
}])
