/**
 * tabs抽象路由模块
 */
angular.module('moviecatApp.routes.tab',[])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('movie', {
      url: '/movie',
      abstract: true, //抽象路由，跟着下面的路由匹配使用，eg:/tab/dash ,抽象路由的html只做加载不单独显示
      templateUrl: 'areas/tabs/tabs.html'
    })
  }])
