'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('HomeCtrl', ['$scope', 'Phone', '$sce',
  function($scope, Phone, $sce) {

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
		description : "<b>Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. </b>Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/2F343A",
		nameSmall : "Assignment",
		nameLarge : "MEAN",
		p1 : "Using Node.js and Angular",
		p2 : "to create a CRUD single page app",
		p3 : "for data management.",
		link : "http://nodejs-johnsoncs4550.rhcloud.com/#/courses",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/717D8C",
		nameSmall : "Assignment",
		nameLarge : "jQuery",
		p1 : "Data Management using everyone's",
		p2 : "favorite DOM manipulation library",
		p3 : null,
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/jquery/profile.html",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		nameSmall : "Assignment",
		nameLarge : "CSS",
		p1 : "An example of CSS Frameworks",
		p2 : "using Boostrap for templating",
		p3 : "for data management.",
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/css/profile.html",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/BDB69C",
		nameSmall : "Assignment",
		nameLarge : "HTML",
		p1 : "A basic example of HTML",
		p2 : "Creating the DOM for a web page.",
		p3 : null,
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/html/studyList.html",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/2F343A",
		nameSmall : "Tablelist",
		nameLarge : ".com",
		p1 : "",
		p2 : "",
		p3 : "",
		link : "",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/717D8C",
		nameSmall : "Tablelist",
		nameLarge : "Admin",
		p1 : null,
		p2 : null,
		p3 : null,
		link : "",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		nameSmall : "Living",
		nameLarge : "Cities",
		p1 : null,
		p2 : null,
		p3 : null,
		link : null,
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
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
		nameLarge : "Portal",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/texture-channel.png",
		link: "#post/texture-channel",
		nameSmall : "Texture",
		nameLarge :  "Channel",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/branding.png",
		link: "#gallery/branding",
		nameSmall : "Branding",
		nameLarge : "Design",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/texturetechnologies.png",
		link: "#post/texturetechnologies",
		nameSmall : "Texture",
		nameLarge : "Technologies.com",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/clintvalentine.png" ,
		link: "#post/clintvalentine ",
		nameSmall : "Clint",
		nameLarge : "Valentine.com",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/linkedin-grader.png",
		link: "#post/linkedin-grader",
		nameSmall : "LinkedIn",
		nameLarge : "Grader",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/texture-report.png" ,
		link: "#post/texture-report",
		nameSmall : "Texture",
		nameLarge : "Report.com",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/fire.png" ,
		link: "#gallery/fire",
		nameSmall : "Fire",
		nameLarge : "Photography",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/fitbit-challenge.png",
		link: "#post/fitbit-challenge",
		nameSmall : "FitBit",
		nameLarge : "Challenge",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/ttc-training-videos.png" ,
		link: "#post/ttc-training",
		nameSmall : "TA.XT2",
		nameLarge : "Training Videos",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/quadcopter.png" ,
		link: "#post/quadcopter",
		nameSmall : "Project",
		nameLarge : "quadcopter",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/evertrue-email.png",
		link: "#post/evertrue-email",
		nameSmall : "Email",
		nameLarge : "Campaigns",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/eventler.png",
		link: "#post/eventler",
		nameSmall : "EverTrue\'s",
		nameLarge : "Eventler",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/firebrand-innovations.png",
		link: "#post/firebrand-innovations",
		nameSmall : "Firebrand",
		nameLarge : "Innovations.com",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/salem-state.png",
		link: "#post/salem-state",
		nameSmall : "Salem State",
		nameLarge : "Design",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
		
		// demo
		// site
		// github

	},{

		img : "images/thumbs/tetris.png",
		link: "#post/tetris",
		nameSmall : "Tetris",
		nameLarge : "in Scheme",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/macro.png",
		link: "#gallery/macro",
		nameSmall : "Macro",
		nameLarge : "Photography",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	}];

	angular.forEach($scope.posts, function(post){
		post.description = $sce.trustAsHtml(post.description);
	})

	console.log($scope.posts)

			
  }]);

appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {


    
  }]);
