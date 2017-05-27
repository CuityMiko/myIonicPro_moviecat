/**
 * 引导页控制器模块
 */
angular.module('moviecatApp.controllers.guidepage',['moviecatApp.services.guidepage'])
  .controller('GuidePageCtrl',['$scope','$location','$state',function($scope,$location,$state){
    //swiper引导页
    var mySwiper = new Swiper ('.swiper-container', {
      //direction: 'vertical', //纵向滚动，默认横向
      //loop: true, //循环切换
      autoplay:3000, //自动切换间隔时间
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // onSlideChangeEnd:function(swiper){ //滑动到下一个页面触发事件
      //   mySwiper.activeIndex //滑动到第几个页面
      // }
    })

    //开始使用
    $scope.tostart=function(){
      $location.path("/tab/home");
    }

    //页面跳转的另一种实现
    $scope.gohome=()=>{
      $state.go('movie.in_theaters'); //路由名称
    }
  }])
