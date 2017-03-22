angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope, $http,getData) {

  })

  .controller('ChatsCtrl', function($scope) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  })


  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
  .controller('LoginCtrl', function($scope, $state) {
    $scope.username;
    $scope.password;
    $scope.login = function() {

    }
    $scope.resg = function() {
      $state.go('resg');
    }
  })
  .controller('resgCtrl', function($scope, $state) {

  })
  .controller('bookDetailCtrl', function($scope,getData) {
    var url="/book.json";
    getData.async(url).then(function(data){
      $scope.bookData=data.data.data;
    })
  })
  .controller('bookShelfCtrl', function($scope) {

  })
  .controller('bookitemsCtrl', function($scope,getData) {
    var url="/books.json";
    getData.async(url).then(function(data){
      $scope.books=data.data.data;
    })
  })
  .controller('messageCtrl', function($scope) {

  })
  .controller('commentCtrl', function($scope) {

  })
  .controller('catalogueCtrl', function($scope,$http,getData) {
    var url ='/chapters.json';
    getData.async(url).then(function(data){
      $scope.chapters=data.data.data;
    })
    $scope.goPage=function(id){
      console.log(id);
    }
  })
  .controller('userCenterCtrl', function($scope) {

  })
  .controller('userDetailCtrl', function($scope) {

  })
  .filter('formatDate',function(){
    return function(text){
      var num= parseInt(text);
      var date = new Date(num);
      return text = date.getFullYear()+"年 "+(date.getMonth()+1)+"月"+date.getDate()+"日 "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }
  });
