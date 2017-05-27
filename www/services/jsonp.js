/**
 * 自定义一个跨域请求的Jsonp服务($http.jsonp服务针对第三方的API不好用需要自定义)
 */
(function(angular){
	var http=angular.module('moviecatApp.services.jsonp',[]);
	http.service('JsonpService',['$window','$document',function($window,$document){
		this.jsonp=function(url,data,callback,fcname='callback'){
			//随机生成函数名
			var funcName='callback_jsonp'+Math.random().toString().replace('.','');
			//将随机生成的函数名作为$window的属性并给其赋值callback函数
			//window[funcName]=callback; 此种方式页面上追加的script标签不会被删除，这样页面上就会有越来越多生成的scirpt标签
			//将数据对象转换成字符串格式的参数
			var querystring=url.indexOf('?')==-1?'?':'&';
			for(var key in data){
				querystring+=key+'='+data[key]+'&';
			}
			//将随机生成的函数名也加到字符串参数中
			querystring +=fcname+'='+funcName;
			//生成script标签
			var scriptElement=$document[0].createElement('script');
			scriptElement.src=url+querystring;
			//在将script标签追加在页面上之前执行一次callback，这样页面上生成的script就会自动删除
			window[funcName]=function(data){
				callback(data);
				//删除生成的script标签
				document.body.removeChild(scriptElement);
			};
			//将生成的script标签追加在页面上
			$document[0].body.appendChild(scriptElement);
		}
	}])
})(angular)
