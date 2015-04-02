'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('HomeCtrl', ['$scope', 'Phone',
  function($scope, Phone) {

  	$scope.focused = -1;

  	$scope.focus = function(index){
  		$scope.focused = index;
  	}

  	// List of available preview thumbnails
  	$scope.posts = [{
		img : "images/alex.jpg",
		nameSmall : "About",
		nameLarge : "ME",
		p1 : "Javascript Developer. Computer Science",
		p2 : "and Interactive Media from Northeastern",
		p3 : "University. Boston, MA.",
		link : "/#/",
  	},{
		img : "http://placehold.it/480x480/2F343A",
		nameSmall : "Assignment",
		nameLarge : "MEAN",
		p1 : "Using Node.js and Angular",
		p2 : "to create a CRUD single page app",
		p3 : "for data management.",
		link : "http://nodejs-johnsoncs4550.rhcloud.com/#/courses",
  	},{
		img : "http://placehold.it/480x480/717D8C",
		nameSmall : "Assignment",
		nameLarge : "jQuery",
		p1 : "Data Management using everyone's",
		p2 : "favorite DOM manipulation library",
		p3 : null,
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/jquery/profile.html",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		nameSmall : "Assignment",
		nameLarge : "CSS",
		p1 : "An example of CSS Frameworks",
		p2 : "using Boostrap for templating",
		p3 : "for data management.",
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/css/profile.html",
  	},{
		img : "http://placehold.it/480x480/BDB69C",
		nameSmall : "Assignment",
		nameLarge : "HTML",
		p1 : "A basic example of HTML",
		p2 : "Creating the DOM for a web page.",
		p3 : null,
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/html/studyList.html",
  	},{
		img : "http://placehold.it/480x480/2F343A",
		nameSmall : "Tablelist",
		nameLarge : ".com",
		p1 : "",
		p2 : "",
		p3 : "",
		link : "",
  	},{
		img : "http://placehold.it/480x480/717D8C",
		nameSmall : "Tablelist",
		nameLarge : "Admin",
		p1 : null,
		p2 : null,
		p3 : null,
		link : "",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		nameSmall : "Living",
		nameLarge : "Cities",
		p1 : null,
		p2 : null,
		p3 : null,
		link : null,
  	},{
		img : "http://placehold.it/480x480/BDB69C",
		nameSmall : "G-",
		nameLarge : "Player",
		p1 : null,
		p2 : null,
		p3 : null,
		link : "",
  	}, {
		img : "http://placehold.it/480x480/2F343A",
		nameSmall : "Swarm",
		nameLarge : "Navigation",
		p1 : null,
		p2 : null,
		p3 : null,
		link : "",
  	}, {
		img : "images/thumbs/evertrue-amp.png",
		link: "#post/evertrue-amp",
		nameSmall : "EverTrue's",
		nameLarge : "Portal"
	},{
		img : "images/thumbs/texture-channel.png",
		link: "#post/texture-channel",
		nameSmall : "Texture",
		nameLarge :  "Channel",
	},{
		img : "images/thumbs/branding.png",
		link: "#gallery/branding",
		nameSmall : "Branding",
		nameLarge : "Design",
	},{
		img : "images/thumbs/texturetechnologies.png",
		link: "#post/texturetechnologies",
		nameSmall : "Texture",
		nameLarge : "Technologies.com",
	},{
		img : "images/thumbs/clintvalentine.png" ,
		link: "#post/clintvalentine ",
		nameSmall : "Clint",
		nameLarge : "Valentine.com"
	},{

		img : "images/thumbs/linkedin-grader.png",
		link: "#post/linkedin-grader",
		nameSmall : "LinkedIn",
		nameLarge : "Grader"
	},{

		img : "images/thumbs/texture-report.png" ,
		link: "#post/texture-report",
		nameSmall : "Texture",
		nameLarge : "Report.com",
	},{
		img : "images/thumbs/fire.png" ,
		link: "#gallery/fire",
		nameSmall : "Fire",
		nameLarge : "Photography",
	},{
		img : "images/thumbs/fitbit-challenge.png",
		link: "#post/fitbit-challenge",
		nameSmall : "FitBit",
		nameLarge : "Challenge",
	},{
		img : "images/thumbs/ttc-training-videos.png" ,
		link: "#post/ttc-training",
		nameSmall : "TA.XT2",
		nameLarge : "Training Videos",
	},{

		img : "images/thumbs/quadcopter.png" ,
		link: "#post/quadcopter",
		nameSmall : "Project",
		nameLarge : "quadcopter",
	},{

		img : "images/thumbs/evertrue-email.png",
		link: "#post/evertrue-email",
		nameSmall : "Email",
		nameLarge : "Campaigns",
	},{

		img : "images/thumbs/eventler.png",
		link: "#post/eventler",
		nameSmall : "EverTrue\'s",
		nameLarge : "Eventler",
	},{

		img : "images/thumbs/firebrand-innovations.png",
		link: "#post/firebrand-innovations",
		nameSmall : "Firebrand",
		nameLarge : "Innovations.com",
	},{

		img : "images/thumbs/salem-state.png",
		link: "#post/salem-state",
		nameSmall : "Salem State",
		nameLarge : "Design"
	},{

		img : "images/thumbs/tetris.png",
		link: "#post/tetris",
		nameSmall : "Tetris",
		nameLarge : "in Scheme"
	},{

		img : "images/thumbs/macro.png",
		link: "#gallery/macro",
		nameSmall : "Macro",
		nameLarge : "Photography",
	}];

			
  }]);

appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {


    
  }]);
