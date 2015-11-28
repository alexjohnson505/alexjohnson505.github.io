'use strict';

// App.js
var app = angular.module('app', [
  'ngRoute',
  'appAnimations',
  'appControllers',
  'appFilters',
  'appServices',
  function(){
    console.log('App Initialized.');
  }
]);

// Routes
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'templates/post.tpl.html',
        controller: 'PostCtrl'
      })
      .when('/404', {
        templateUrl: 'templates/404.tpl.html',
      })
      .otherwise({
        redirectTo: '/404'
      });

  }]);


// Namespace
var appServices = angular.module('appServices', ['ngResource']);
var appControllers = angular.module('appControllers', []);

// Filters
angular.module('appFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
