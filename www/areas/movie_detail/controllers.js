/**
 * 电影详情控制器模块
 */
angular.module('moviecatApp.controllers.movie_detail',['moviecatApp.services.movie_detail'])
.controller('MovieDetailCtrl',['$scope','$ionicLoading','$stateParams','MovieDetailFcty','GlobalConfig',
function($scope,$ionicLoading,$stateParams,MovieDetailFcty,GlobalConfig){
  $scope.movie={};
  //遮罩层
  $ionicLoading.show({
    template:'加载中...'
  })
  var url=GlobalConfig.detailAPIurl+$stateParams.id;
  var promise=MovieDetailFcty.getdetaildata(url,{});
  promise.then((data)=>{
    $scope.movie=data;
  },(err)=>{

  }).finally(()=>{
    $ionicLoading.hide();
  })
}])
