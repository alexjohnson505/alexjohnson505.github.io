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
		title : "About <span>ME</span>",
		summary : ["Javascript Developer. Computer Science", "and Interactive Media from Northeastern", "University. Boston, MA."],
		description : "<b>Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. </b>Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
		links : {
			github : "https://github.com/alexjohnson505",
			demo : "alexjohnson.io",
		}
  	},{
		img : "http://placehold.it/480x480/2F343A",
		title : "Assignment <span>MEAN</span>",
		summary : ["Using Node.js and Angular", "to create a CRUD single page app", "for data management."],
		link : "http://nodejs-johnsoncs4550.rhcloud.com/#/courses",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/717D8C",
		title : "Assignment <span>jQuery</span>",
		summary : ["Data Management using everyone's", "favorite DOM manipulation library", ""],
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/jquery/profile.html",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		title : "Assignment <span>CSS</span>",
		summary : ["An example of CSS Frameworks", "using Boostrap for templating", "for data management."],
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/css/profile.html",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/BDB69C",
		title : "Assignment <span>HTML</span>",
		summary : ["A basic example of HTML", "Creating the DOM for a web page.", ""],
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/html/studyList.html",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/2F343A",
		title : "Tablelist <span>.com</span>",
		summary : ["", "", ""],
		link : "",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/717D8C",
		title : "Tablelist <span>Admin</span>",
		summary : [null, null, null],
		link : "",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		title : "Living <span>Cities</span>",
		summary : [null, null, null],
		link : null,
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
  	},{
		img : "http://placehold.it/480x480/BDB69C",
		title : "G- <span>Player</span>",
		summary : [null, null, null],
		link : "",
  	}, {
		img : "http://placehold.it/480x480/2F343A",
		title : "Swarm <span>Navigation</span>",
		summary : [null, null, null],
		link : "",
  	}, {
		img : "images/thumbs/evertrue-amp.png",
		link: "#post/evertrue-amp",
		title : "EverTrue's <span>Portal</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/texture-channel.png",
		link: "#post/texture-channel",
		title : "Texture <span>Channel</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/branding.png",
		link: "#gallery/branding",
		title : "Branding <span>Design</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/texturetechnologies.png",
		link: "#post/texturetechnologies",
		title : "Texture <span>Technologies.com</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/clintvalentine.png" ,
		link: "#post/clintvalentine ",
		title : "Clint <span>Valentine.com</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/linkedin-grader.png",
		link: "#post/linkedin-grader",
		title : "LinkedIn <span>Grader</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/texture-report.png" ,
		link: "#post/texture-report",
		title : "Texture <span>Report.com</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/fire.png" ,
		link: "#gallery/fire",
		title : "Fire <span>Photography</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/fitbit-challenge.png",
		link: "#post/fitbit-challenge",
		title : "FitBit <span>Challenge</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{
		img : "images/thumbs/ttc-training-videos.png" ,
		link: "#post/ttc-training",
		title : "TA.XT2 <span>Training Videos</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/quadcopter.png" ,
		link: "#post/quadcopter",
		title : "Project <span>quadcopter</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/evertrue-email.png",
		link: "#post/evertrue-email",
		title : "Email <span>Campaigns</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/eventler.png",
		link: "#post/eventler",
		title : "EverTrue\'s <span>Eventler</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/firebrand-innovations.png",
		link: "#post/firebrand-innovations",
		title : "Firebrand <span>Innovations.com</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/salem-state.png",
		link: "#post/salem-state",
		title : "Salem State <span>Design</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",	

	},{

		img : "images/thumbs/tetris.png",
		link: "#post/tetris",
		title : "Tetris <span>in Scheme</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	},{

		img : "images/thumbs/macro.png",
		link: "#gallery/macro",
		title : "Macro <span>Photography</span>",
		description : "Lorem ipsum dolor sit amet, mauris lorem ut accumsan sed aliquam. Massa ac est mauris, morbi suscipit vestibulum sit magna lobortis enim. Blandit elementum accumsan adipiscing ipsum venenatis rutrum. Nunc at orci velit iure, recusandae vitae commodo commodo, eget urna ullamcorper dignissim a et, varius integer lobortis blandit sagittis. Eleifend per velit accumsan tincidunt",
	}];

	angular.forEach($scope.posts, function(post){
		post.title = $sce.trustAsHtml(post.title);
		post.description = $sce.trustAsHtml(post.description);
	})

	console.log($scope.posts)

			
  }]);

appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {


    
  }]);
