angular.module('starter.services', [])
.factory('getData',function($http){
  var promise;
  var httpUrl="falseData";
  var getBookFun={
    async:function(url,sendWords){
      var url
      if(sendWords){
        url=httpUrl+url+sendWords;
      }else{
        url= httpUrl+url;
      }
      if(!promise){
        promise= $http({method:'GET',url:url}).success(function(response){
          return response.data;
        }).error(function(response){
          console.log(response);
        })
      }
      return promise;
    }
  }
  return getBookFun;
});
