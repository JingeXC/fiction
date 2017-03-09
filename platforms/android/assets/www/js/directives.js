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
  });
