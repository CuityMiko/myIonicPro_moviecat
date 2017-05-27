/**
 * 电影列表服务模块
 */
angular.module('moviecatApp.services.movie_lists',[])
  .factory('MovieListsFcty',['$http','$q','JsonpService',function($http,$q,JsonpService){
    return {
      getListData:function(url,objparams){
        //$q的promise方法
        var deferred=$q.defer();
        if(objparams!=null){
          JsonpService.jsonp(url,objparams,(result)=>{
            deferred.resolve(result);
          })
        }else
          deferred.reject('参数有误');
        return deferred.promise;
      }
    }
  }])
