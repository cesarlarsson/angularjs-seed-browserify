'use strict';
var _ = require("lodash");


angular.module('myApp.view1', ['ngRoute',require("./template/view1.html")])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: "view1.html",
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);