/**
 * 电影详情服务模块
 */
angular.module('moviecatApp.services.movie_detail',[])
.factory('MovieDetailFcty',['$http','$q','JsonpService',function($http,$q,JsonpService){
  return {
    getdetaildata:function(url,objparams){
      var deferred=$q.defer();
      if(objparams!=null){
        JsonpService.jsonp(url,objparams,(result)=>{
          deferred.resolve(result);
        })
      }else
        deferred.reject('参数有误');
      return deferred.promise;
    }
  };
}])
