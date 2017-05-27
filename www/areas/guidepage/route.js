/**
 * 引导页路由模块
 */
angular.module('moviecatApp.routes.guidepage',['moviecatApp.controllers.guidepage'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('guidepage', {
        url: '/guidepage',
        templateUrl:'areas/guidepage/index.html',
        controller:'GuidePageCtrl'
      })
  }])
