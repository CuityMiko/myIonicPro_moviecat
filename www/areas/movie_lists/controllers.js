/**
 * 电影列表控制器模块
 */
angular.module('moviecatApp.controllers.movie_lists',['moviecatApp.services.movie_lists'])
  .controller('MovieListsCtrl',['$scope','$stateParams','$state','$ionicLoading','$location','MovieListsFcty','GlobalConfig',
  function($scope,$stateParams,$state,$ionicLoading,$location,MovieListsFcty,GlobalConfig){
    $scope.movies=[];
    //获取当前页
    $scope.pageindex=1;
    //获取每页显示的条数
    $scope.pagecount=GlobalConfig.pagesize;
    //获取API类型
    var movie_classify=$state.current.name.split('.')[1]||$state.current.name.split('.')[0]
    //是否加载上拉操作
    $scope.isloadmore=false;
    //搜索内容
    $scope.content='';
    //结果内容
    $scope.title='';
    $scope.isresult=false;
    $scope.total=0;
    //重置
    var reset=function(flag){
      if(flag<1){
        // 停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
        $scope.isloadmore=true;
      }
      else
        $scope.$broadcast('scroll.infiniteScrollComplete');
      //隐藏遮罩层
      $ionicLoading.hide();
    }

    //获取列表
    var getMovieList=function(flag){
      // if($scope.total && ($scope.pageindex-1)*$scope.pagecount>=$scope.total){
      //     $scope.isloadmore=false;
      //     return;
      // }
      //遮罩层
      $ionicLoading.show({
        template:'数据加载中...'
      });
      //获取列表
      var promise=MovieListsFcty.getListData(
        GlobalConfig.listAPIurl+movie_classify,
        {
          start:($scope.pageindex-1)*$scope.pagecount,
          count:$scope.pagecount,
          city:GlobalConfig.city,
          q:$stateParams.q
        }
      );
      promise.then((data)=>{
        if(data!=null && data.subjects.length>0){
          $scope.total=data.total;
          $scope.title=`共${data.total}个有关“${$stateParams.q}”的结果`;
          $scope.isresult=true;
          if(flag>0){
            data.subjects.forEach((item)=>{
              $scope.movies.push(item)
            })
          }else
            $scope.movies=data.subjects;
        }else{
          $scope.isloadmore=false;
          reset(flag);
          $scope.title=`共${data.total}个有关“${$stateParams.q}”的结果`;
          $scope.isresult=true;
          return;
        }
      },(err)=>{
        console.log(err)
      }).finally(()=>{
          reset(flag);
      })
    }
    //下载加载
    $scope.refreshMovieList=function(){
      $scope.movies=[];
      //获取当前页
      $scope.pageindex=1;
      $scope.isloadmore=false;
      getMovieList(0);
    }
    //加载更多
    $scope.loadMoreData=function(){
      $scope.pageindex++;
      getMovieList(1);
    }
    //ion-view刚刚加载完毕的时候
    $scope.$on('$ionicView.beforeEnter',function(){
        getMovieList(0);
    })
    //搜索
    $scope.search=function(){
      if($scope.content){
        $scope.pageindex=1;
        $location.path(`/movie/search/${$scope.content}`)
        // $state.go('movie.search',{q:$scope.content});
      }
    }
  }])
