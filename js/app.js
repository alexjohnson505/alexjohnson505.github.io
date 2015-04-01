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
