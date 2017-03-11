angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('LoginCtrl',function($scope,$state){
  $scope.username;
  $scope.password;
  $scope.login=function(){

  }
  $scope.resg=function(){
    $state.go('resg');
  }
})
.controller('resgCtrl',function($scope,$state){

})
.controller('bookDetailCtrl',function($scope){

})
.controller('bookShelfCtrl',function($scope){

})
.controller('userDetailCtrl',function($scope){
  
})
;
