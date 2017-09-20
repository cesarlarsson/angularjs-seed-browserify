'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http','$timeout',function($scope,$http,$timeout) {
  $scope.title = "Destination Admin";
  $scope.key="4b50c3a2ced189667e2ebbc6f97d1ac1";
  $scope.destinations = [];
  $scope.newDestination ={
    city: undefined,
    country: undefined
  };

  $scope.addDestination = function(){
    $scope.destinations.push(
      {
        city: $scope.newDestination.city,
        country: $scope.newDestination.country
      }
    );
  }

  $scope.getWeather = function (destination){

    $http.get("http://api.openweathermap.org/data/2.5/weather?q="+destination.city+"&APPID="+$scope.key).then(
      function successCallback(response){

          if(response.data.weather){
            destination.weather = {};
            destination.weather.main =  response.data.weather[0].main;
            destination.weather.temp = $scope.convertKelvinToCelsius( response.data.main.temp);
          } else {
            $scope.message = "city not Found";
          }
      
      },
      function errorCallback(error){

        $scope.message = "Server Error";

      }
    )
  }
  $scope.messageWatcher = $scope.$watch('message', function(){
    if($scope.message){

      $timeout(function(){
        $scope.message=null;
      },3000);
    }

  });
  $scope.convertKelvinToCelsius = function(temp){
    return Math.round(temp -273);
  };
  

}]);