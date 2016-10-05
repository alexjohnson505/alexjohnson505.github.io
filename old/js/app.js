'use strict';

// App.js
var app = angular.module('app', [
  'ngRoute',
  'appControllers',
  'appFilters',
  'appServices'
]).run(['$rootScope',
  function($rootScope) {

    console.log('App Initialized.');

  }]);

// Routes
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl'
      })
      .when('/:postId', {
        templateUrl: 'templates/post.tpl.html',
        controller: 'PostCtrl'
      })
      .when('/404', {
        templateUrl: 'templates/404.tpl.html',
      })
      .otherwise({
        redirectTo: '/404'
      });

    // use the HTML5 History API
    // https://scotch.io/quick-tips/pretty-urls-in-angularjs-removing-the-hashtag
    $locationProvider.html5Mode(true);

  }]);


// Namespace
var appServices = angular.module('appServices', ['ngResource']);
var appControllers = angular.module('appControllers', []);
var appFilters = angular.module('appFilters', []);

// Trust HTML String
// http://stackoverflow.com/questions/20520866/can-we-use-sce-trustashtmlstring-out-of-filters
appFilters.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);