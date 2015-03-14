'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'appAnimations',
  'appControllers',
  'appFilters',
  'appServices',
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/posts', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'PhoneListCtrl'
      }).
      when('/posts/:phoneId', {
        templateUrl: 'templates/post.tpl.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/posts'
      });
  }]);
