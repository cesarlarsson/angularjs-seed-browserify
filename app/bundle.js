(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./view1/view1');
require('./view2/view2');
require('./components/version/version.js');
require('./components/version/version-directive.js');
require('./components/version/interpolate-filter.js');

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  require("./view1/template/view1.html"),
  require("./view2/template/view2.html")
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

},{"./components/version/interpolate-filter.js":2,"./components/version/version-directive.js":3,"./components/version/version.js":4,"./view1/template/view1.html":5,"./view1/view1":6,"./view2/template/view2.html":7,"./view2/view2":8}],2:[function(require,module,exports){
'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

},{}],3:[function(require,module,exports){
'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

},{}],4:[function(require,module,exports){
'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');

},{}],5:[function(require,module,exports){
var ngModule = angular.module('view1.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('view1.html',
    '<p>This is the partial for view 1 :-). 222</p>\n' +
    '');
}]);

module.exports = "view1.html";
},{}],6:[function(require,module,exports){
'use strict';
//var _ = require("lodash");


angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: "view1.html",
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);
},{}],7:[function(require,module,exports){
var ngModule = angular.module('view2.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('view2.html',
    '<p>This is the partial for {{title}}</p>\n' +
    '<p>\n' +
    '  Showing of \'interpolate\' filter:\n' +
    '  {{ \'Current version is v%VERSION%.\' | interpolate }}\n' +
    '</p>\n' +
    '\n' +
    '<section>\n' +
    '  <form name="destinationForm" ng-submit="addDestination()">\n' +
    '    City: <input name="city" type="text" ng-model="newDestination.city" />\n' +
    '    Country: <input name="country" type="text" ng-model="newDestination.country"  />\n' +
    '    <input class="btn btn-success" type="submit" value="Add" />\n' +
    '  </form>\n' +
    '</section>\n' +
    '\n' +
    '<section>\n' +
    '  <h2>Your trip</h2>\n' +
    '  <h4 ng-show="message">{{message}}</h4>\n' +
    '  <div ng-repeat="destination in destinations">\n' +
    '    <span>{{destination.city}},{{ destination.country}}</span>\n' +
    '    <span> - {{ destination.weather.main}}, {{destination.weather.temp}}</span>\n' +
    '    <button ng-click="getWeather(destination)">Update Weather</button>\n' +
    '  </div>\n' +
    '\n' +
    '</section>\n' +
    '');
}]);

module.exports = "view2.html";
},{}],8:[function(require,module,exports){
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
},{}]},{},[1]);
