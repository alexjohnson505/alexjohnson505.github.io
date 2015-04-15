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
		summary : [
			"Javascript Developer. Computer Science", 
			"and Interactive Media from Northeastern", 
			"University. Boston, MA."
		],
		description : "<b>I'm Alex</b>. Graduated from Northeastern University in 2015 with a degree in Computer Science and Interactive Media. <b>Javascript Developer</b> by trade with experience in Marketing and UX. Currently working at Tablelist.",
		links : {
			github : "https://github.com/alexjohnson505",
			demo : "alexjohnson.io",
		}
  	},{
		img : "http://placehold.it/480x480/2F343A",
		title : "Assignment <span>MEAN</span>",
		summary : [
			"Using Node.js and Angular", 
			"to create a boilerplate single", 
			"page app for data management."
		],
		description : "Assignment #04 for CS4550 Web Development.",
		links : {
			demo : "http://nodejs-johnsoncs4550.rhcloud.com/#/courses",
		}
  	},{
		img : "http://placehold.it/480x480/717D8C",
		title : "Assignment <span>jQuery</span>",
		summary : ["using jQuery for data mangement"],
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/jquery/profile.html",
		description : "Assignment #03 for CS4550 Web Development.",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		title : "Assignment <span>CSS</span>",
		summary : ["An example of CSS Frameworks.", "creating a Bootstrap template."],
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/css/profile.html",
		description : "Assignment #02 for CS4550 Web Development.",
  	},{
		img : "http://placehold.it/480x480/BDB69C",
		title : "Assignment <span>HTML</span>",
		summary : ["A basic example of HTML", "Creating the DOM for a web page."],
		link : "http://net4.ccs.neu.edu/home/alexj/assignments/html/studyList.html",
		description : "Assignment #01 for CS4550 Web Development.",
  	},{
		img : "http://placehold.it/480x480/2F343A",
		title : "Tablelist <span>.com</span>",
		summary : ["Tablelist's homepage", "Instant access to nightclubs and lounges", "nightlife reservations from the browser"],
		links : {
			demo : "tablelist.com"
		}
		description : "As the web developer at Tablelist, I created an Angular web app for the home page. This project expanding into a reservation platform for customers.",
  	},{
		img : "http://placehold.it/480x480/717D8C",
		title : "Tablelist <span>Admin</span>",
		summary : ["The Tablelist Admin Portal"],
		description : "A set of tools for data management and analytics. This platform is used interally for marketing and sales. It maintains data analytics for the sales team and support tools for customer service.",
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		title : "Living <span>Cities</span>",
		summary : [],
		links : {
			github : "github.com/data-visualization-capstone/web",
		}
		description : "A data visualization project for merging city data with social data and user activity. As the lead developer for my Interactive Media Capstone team, I created a data visualization platform, and an abstraction layer over the Leaflet.js API/",
  	},{
  	},{
		img : "http://placehold.it/480x480/DDDDDD",
		title : "Living Cities <span>API</span>",
		summary : [],
		links : {
			github : "github.com/data-visualization-capstone/api",
		}
		description : "As part of my senior year Capstone project, I led a team of artists and developers to create a spatial data visualization app. As part of the data collection phase, we build a set of social media data scrapers and a database for storing position data.",
  	},{
		img : "http://placehold.it/480x480/BDB69C",
		title : "G- <span>Player</span>",
		summary : ["Spacial Temporal", "data visualization of player", "activity in video games."],
		description : "Working with the Game Design department of Northeastern, I was the lead developer for a web app for visualizing and analyzing player activity in video games. This tool was used in a study of player behaviour in open world video games."
		links : {
			demo : "g-player.herokuapp.com",
			online : "https://github.com/spacial-player-data-visualization/g-player-visualization",
		}
  	}, {
		img : "http://placehold.it/480x480/2F343A",
		title : "Swarm <span>Navigation</span>",
		summary : ["Interactive Visualization", "of Swarm Behaviour using Craig", "Reynold's research in swarm algorithms."],
		links : {
			code : "https://github.com/alexjohnson505/swarm-navigation",
			demo : "http://alexjohnson.io/swarm-navigation",
			// @TODO Fix
		}
  	}, {
		img : "images/thumbs/evertrue-amp.png",
		link: "#post/evertrue-amp",
		title : "EverTrue's <span>Portal</span>",
		summary : ["Client facing data management", "administrative portal"],
		description : "While working at EverTrue, I focused on their client facing admin portal, a set of power tools for managing and configuring the client's white-labeled networking app.",
	},{
		img : "images/thumbs/texture-channel.png",
		link: "#post/texture-channel",
		title : "Texture <span>Channel</span>",
		summary : ["Subscription based", "video training resource", "for customers."],
		description : "TextureChannel.com is a Subscription service offered by Texture Technologies as a solution to remote video training. Users are issued an account, where they can view training videos for the TA.XT2 Plus and Texture Measurement Software.",
	},{
		img : "images/thumbs/branding.png",
		link: "#gallery/branding",
		title : "Branding <span>Design</span>",
		summary : ["Branding and", "marketing experience"]
		description : "A quick overview of some branding and graphic design work I've created.",
	},{
		img : "images/thumbs/texturetechnologies.png",
		link: "#post/texturetechnologies",
		title : "Texture <span>Technologies.com</span>",
		summary : ["Texture Technologies' Home Page", "Scientific Instrument and", "Texture Measurement support resources" ]
		description : "TextureTechnologies.com is the primary resource for Texture Technologies' texture measurement hardware and software. Containing application studies, and hardware specifications.",
	},{
		img : "images/thumbs/clintvalentine.png" ,
		link: "#post/clintvalentine ",
		title : "Clint <span>Valentine.com</span>",
		summary : ["Adventurer and Photography", "Personal site and blog."]
		description : "ClintValentine.com is a personal site for Clint - an experienced rock climber, and cross country biker. Clint documents his travels along with photographing the environment.",
	},{

		img : "images/thumbs/linkedin-grader.png",
		link: "#post/linkedin-grader",
		title : "LinkedIn <span>Grader</span>",
		summary : ["An analytics tool", "for ranking LinkedIn groups", "in comparison to competitors."]
		description : "LinkedIn Grader is an analytics tool for customers, allowing clients to analyze their LinkedIn presense and engagement in relation to similar organizations.",
	},{

		img : "images/thumbs/texture-report.png" ,
		link: "#post/texture-report",
		title : "Texture <span>Report.com</span>",
		summary : ["Texture research blog"]
		description : "Texture Technologies' blog is a one-stop source for news in the world of texture analysis",
	},{
		img : "images/thumbs/fire.png" ,
		link: "#gallery/fire",
		title : "Fire <span>Photography</span>",
		description : "",
	},{
		img : "images/thumbs/fitbit-challenge.png",
		link: "#post/fitbit-challenge",
		title : "FitBit <span>Challenge</span>",
		description : "",
	},{
		img : "images/thumbs/ttc-training-videos.png" ,
		link: "#post/ttc-training",
		title : "TA.XT2 <span>Training Videos</span>",
		description : "",
	},{

		img : "images/thumbs/quadcopter.png" ,
		link: "#post/quadcopter",
		title : "Project <span>quadcopter</span>",
		description : "",
	},{

		img : "images/thumbs/evertrue-email.png",
		link: "#post/evertrue-email",
		title : "Email <span>Campaigns</span>",
		description : "",
	},{

		img : "images/thumbs/eventler.png",
		link: "#post/eventler",
		title : "EverTrue\'s <span>Eventler</span>",
		description : "",
	},{

		img : "images/thumbs/firebrand-innovations.png",
		link: "#post/firebrand-innovations",
		title : "Firebrand <span>Innovations.com</span>",
		description : "",
	},{

		img : "images/thumbs/salem-state.png",
		link: "#post/salem-state",
		title : "Salem State <span>Design</span>",
		description : "",	

	},{

		img : "images/thumbs/tetris.png",
		link: "#post/tetris",
		title : "Tetris <span>in Scheme</span>",
		description : "",
	},{

		img : "images/thumbs/macro.png",
		link: "#gallery/macro",
		title : "Macro <span>Photography</span>",
		description : "",
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
