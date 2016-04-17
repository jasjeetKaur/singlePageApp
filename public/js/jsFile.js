var myapp = angular.module('myapp', ['ngRoute']);

myapp.controller('ctrl', ['$scope', '$http',function($scope,$http){

$(".data1").hide();
$(".data2").hide();
$(".data3").hide();
$(".data4").hide();

$scope.btn1=function()
{
  $(".data1").toggle();
  $http({

         method  : 'GET',
         url     : '/submitForm',
       })
       .then(function(response){$scope.country1=response.data;});
};

$scope.btn2=function()
{
  $(".data2").toggle();
  $http({

         method  : 'GET',
         url     : '/submitForm2',
       })
       .then(function(response){$scope.populations=response.data;});
};

$scope.btn3=function()
{
  $(".data3").toggle();
  $http({

         method  : 'GET',
         url     : '/submitForm3',
       })
       .then(function(response){$scope.country2=response.data;});
};

$scope.btn4=function()
{
  $(".data4").toggle();
  $http({

         method  : 'GET',
         url     : '/submitForm4',
       })
       .then(function(response){$scope.country3=response.data;});
};

}]);
