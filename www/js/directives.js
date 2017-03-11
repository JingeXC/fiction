angular.module('starter.directives',[])
  .directive('goLogin',function(){
    return {
      restrict:'EA',
      replace:false,
      controller:function($scope,$state){
        $scope.goLoginPage=function(){
          $state.go('login');
        }
      }
    }
  })
  .directive('goHome',function(){
    return {
      restrict:'EA',
      replace:false,
      controller:function($scope,$state){
        $scope.goHomePage=function(){
          $state.go('tab.dash');
        }
      }
    }
  })
  .directive('goBack',function(){
    return {
      restrict:'EA',
      replace:false,
      controller:function($scope,$state){
        $scope.goback=function(){
          window.history.back();
        }
      }
    }
  })
