/**
 * 全局配置文件
 */
angular.module("moviecatApp.global",[])
  .constant("AppConfig",{
    pagesize:10,
		city:'杭州',
		listAPIurl:'http://api.douban.com/v2/movie/',
		detailAPIurl:'http://api.douban.com/v2/movie/subject/',
    version:'0.0.1'
  })
