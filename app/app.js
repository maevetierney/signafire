'use strict';

// Declare app level module which depends on views, and core components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

var app = angular.module('myApp', [
    'myApp.version'
]);

app.controller('myController', ['$scope', '$http',function ($scope, $http) {
  $http.get('messages.json').then(function(data, $scope, response){
      $scope.messages = response.data;
  }

);
 }]);
