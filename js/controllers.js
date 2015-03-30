'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('HomeCtrl', ['$scope', 'Phone',
  function($scope, Phone) {

  	$scope.posts = [{
		img : "http://placehold.it/480x360/2F343A",
		nameSmall : "Assignment",
		nameLarge : "MEAN",
		p1 : "Using Node.js and Angular",
		p2 : "to create a CRUD single page app",
		p3 : "for data management.",
		link : "http://nodejs-johnsoncs4550.rhcloud.com/#/courses",
  	},{
		img : "http://placehold.it/480x360/717D8C",
		nameSmall : "Assignment",
		nameLarge : "jQuery",
		p1 : "Data Management using everyone's",
		p2 : "favorite DOM manipulation library",
		p3 : null,
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/jquery/profile.html",
  	},{
		img : "http://placehold.it/480x360/DDDDDD",
		nameSmall : "Assignment",
		nameLarge : "CSS",
		p1 : "An example of CSS Frameworks",
		p2 : "using Boostrap for templating",
		p3 : "for data management.",
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/css/profile.html",
  	},{
		img : "http://placehold.it/480x360/BDB69C",
		nameSmall : "Assignment",
		nameLarge : "HTML",
		p1 : "A basic example of HTML",
		p2 : "Creating the DOM for a web page.",
		p3 : null,
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/html/studyList.html",
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
