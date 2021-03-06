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
