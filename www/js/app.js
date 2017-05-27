/**
 * 项目入口
 */
angular.module('moviecatApp', ['ionic',
  'moviecatApp.config', //配置模块，控制不同平台机器的兼容性
  'moviecatApp.global', //全局配置文件
  'moviecatApp.routes' //路由配置模块
])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
