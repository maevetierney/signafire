'use strict';

var app = angular.module('myApp.view2', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

app.controller('View2Ctrl', [function() {

}]);
