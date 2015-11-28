'use strict';

// App.js
var app = angular.module('app', [
  'ngRoute',
  'appAnimations',
  'appControllers',
  'appFilters',
  'appServices',
]);

// Routes
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'templates/post.tpl.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

// Namespace
var appServices = angular.module('appServices', ['ngResource']);
var appControllers = angular.module('appControllers', []);