'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('HomeCtrl', ['$scope', 'Phone',
  function($scope, Phone) {

  	$scope.posts = [{
		img : "http://placehold.it/480x360/2F343A",
		nameSmall : "Test",
		nameLarge : "Test2",
		p1 : "p1",
		p2 : "p2",
		p3 : "p3",
		link : "link",
  	},{
		img : "http://placehold.it/480x360/717D8C",
		nameSmall : "Test",
		nameLarge : "Test2",
		p1 : "p1",
		p2 : "p2",
		p3 : "p3",
		link : "link",
  	},{
		img : "http://placehold.it/480x360/DDDDDD",
		nameSmall : "Test",
		nameLarge : "Test2",
		p1 : "p1",
		p2 : "p2",
		p3 : "p3",
		link : "link",
  	},{
		img : "http://placehold.it/480x360/BDB69C",
		nameSmall : "Test",
		nameLarge : "Test2",
		p1 : "p1",
		p2 : "p2",
		p3 : "p3",
		link : "link",
  	},{
		img : "http://placehold.it/480x360/80CEB9",
		nameSmall : "Test",
		nameLarge : "Test2",
		p1 : "p1",
		p2 : "p2",
		p3 : "p3",
		link : "link",
  	},{
		img : "http://placehold.it/480x360/41AAC4",
		nameSmall : "Test",
		nameLarge : "Test2",
		p1 : "p1",
		p2 : "p2",
		p3 : "p3",
		link : "link",
  	}];
    
  }]);

appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {


    
  }]);
