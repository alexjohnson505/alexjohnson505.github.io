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
  		//{
		// img : "images/alex.jpg",
		// title : "About <span>ME</span>",
		// 	"Javascript Developer. Computer", 
		// 	"Science and Interactive Media", 
		// 	"Major at Northeastern"
		// ],
		// description : "<b>I'm Alex</b>. Graduated from Northeastern University in 2015 with a degree in Computer Science and Interactive Media. <b>Javascript Developer</b> by trade with experience in Marketing and UX. Currently working at Tablelist.",
  		// },
  
		img : "images/tablelist.png",
		title : "Tablelist <span>.com</span>",
		links : {
			demo : "http://tablelist.com"
		},
		description : "As the web developer at Tablelist, I created an Angular web app for the home page. This project expanding into a reservation platform for customers.",
  	},{
		img : "images/blue.png",
		title : "Tablelist <span>Admin</span>",
		description : "A set of tools for data management and analytics. This platform is used interally for marketing and sales. It maintains data analytics for the sales team and support tools for customer service.",
  	},{
		img : "images/livingcities.png",
		title : "Living <span>Cities</span>",
		links : {
			github : "http://github.com/data-visualization-capstone/web",
			demo : "http://vent8225.dyndns.org/map.html",
		},
		description : "A data visualization project for merging city data with social data and user activity. As the lead developer for my Interactive Media Capstone team, I created a data visualization platform, and an abstraction layer over the Leaflet.js API",
  	},{
		img : "images/livingcitiesapi.png",
		title : "Living Cities <span>API</span>",
		links : {
			github : "http://github.com/data-visualization-capstone/api",
		},
		description : "As part of my senior year Capstone project, I led a team of artists and developers to create a spatial data visualization app. As part of the data collection phase, we build a set of social media data scrapers and a database for storing position data.",
  	},{
		img : "images/g-player.jpg",
		title : "G- <span>Player</span>",
		description : "Working with the Game Design department of Northeastern, I was the lead developer for a web app for visualizing and analyzing player activity in video games. This tool was used in a study of player behaviour in open world video games.",
		links : {
			demo : "http://g-player.herokuapp.com",
			github : "https://github.com/spacial-player-data-visualization/g-player-visualization",
		},
  	}, {
		img : "images/swarm.png",
		title : "Swarm <span>Navigation</span>",
		links : {
			github : "https://github.com/alexjohnson505/swarm-navigation",
			demo : "http://alexjohnson.io/swarm-navigation",
		},
  	}, {
		img : "images/thumbs/evertrue-amp.png",
		link: "#post/evertrue-amp",
		title : "EverTrue's <span>Portal</span>",
		description : "While working at EverTrue, I focused on their client facing admin portal, a set of power tools for managing and configuring the client's white-labeled networking app.",
	},{
		img : "images/thumbs/texture-channel.png",
		link: "#post/texture-channel",
		title : "Texture <span>Channel</span>",
		description : "TextureChannel.com is a Subscription service offered by Texture Technologies as a solution to remote video training. Users are issued an account, where they can view training videos for the TA.XT2 Plus and Texture Measurement Software.",
	},{
	// 	img : "images/thumbs/branding.png",
	// 	link: "#gallery/branding",
	// 	title : "Branding <span>Design</span>",
	// 	description : "A quick overview of some branding and graphic design work I've created.",
	// },{
		img : "images/thumbs/texturetechnologies.png",
		link: "#post/texturetechnologies",
		title : "Texture <span>Technologies.com</span>",
		description : "TextureTechnologies.com is the primary resource for Texture Technologies' texture measurement hardware and software. Containing application studies, and hardware specifications.",
		links : {
			demo : "http://texturetechnologies.com/",
		}
	},{
		img : "images/thumbs/clintvalentine.png" ,
		link: "#post/clintvalentine ",
		title : "Clint <span>Valentine.com</span>",
		description : "ClintValentine.com is a personal site for Clint - an experienced rock climber, and cross country biker. Clint documents his travels along with photographing the environment.",
		links : {
			demo : "http://www.clintvalentine.com/",
		}
	},{

		img : "images/thumbs/linkedin-grader.png",
		link: "#post/linkedin-grader",
		title : "LinkedIn <span>Grader</span>",
		description : "LinkedIn Grader is an analytics tool for customers, allowing clients to analyze their LinkedIn presense and engagement in relation to similar organizations.",
	},{

		img : "images/thumbs/texture-report.png" ,
		link: "#post/texture-report",
		title : "Texture <span>Report.com</span>",
		description : "Texture Technologies' blog is a one-stop source for news in the world of texture analysis",
	},{
	// 	img : "images/thumbs/fire.png" ,
	// 	link: "#gallery/fire",
	// 	title : "Fire <span>Photography</span>",
	// 	description : "",
	// },{
		img : "images/thumbs/fitbit-challenge.png",
		link: "#post/fitbit-challenge",
		title : "FitBit <span>Challenge</span>",
		description : "A single page web app for tracking coworker's pedometer activity through the FitBit API. Race to 1,000,000 steps.",
	},{
		img : "images/thumbs/ttc-training-videos.png" ,
		link: "#post/ttc-training",
		title : "TA.XT2 <span>Training Videos</span>",
		description : "Filmed and edited over 20 hours of tutorial videos for Texture Analyzer TA.XT2 Hardware Training in addition to Texture Exponennt Software Training",
	},{

		img : "images/thumbs/quadcopter.png" ,
		link: "#post/quadcopter",
		title : "Project <span>quadcopter</span>",
		description : "As summer challenge, I worked with Nate Lilienthal to build a remote controllable Arduino-powered Quadcopter from scratch.",
	},{

	// 	img : "images/thumbs/evertrue-email.png",
	// 	link: "#post/evertrue-email",
	// 	title : "Email <span>Campaigns</span>",
	// 	description : "",
	// },{

	// 	img : "images/thumbs/eventler.png",
	// 	link: "#post/eventler",
	// 	title : "EverTrue\'s <span>Eventler</span>",
	// 	description : "",
	// },{

		img : "images/thumbs/firebrand-innovations.png",
		link: "#post/firebrand-innovations",
		title : "Firebrand <span>Innovations.com</span>",
		description : "",
		links : {
			demo : "http://firebrandinnovations.com/",
		}

	},{

	// 	img : "images/thumbs/salem-state.png",
	// 	link: "#post/salem-state",
	// 	title : "Salem State <span>Design</span>",
	// 	description : "",	

	// },{
		img : "images/thumbs/tetris.png",
		link: "#post/tetris",
		title : "Tetris <span>in Scheme</span>",
		description : "As a challenge, I re-built Tetris in Scheme.",
	// },{

	// 	img : "images/thumbs/macro.png",
	// 	link: "#gallery/macro",
	// 	title : "Macro <span>Photography</span>",
	// 	description : "",
	}];

	angular.forEach($scope.posts, function(post){
		post.title = $sce.trustAsHtml(post.title);
		post.description = $sce.trustAsHtml(post.description);
	})

	console.log($scope.posts)

			
  }]);

appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'content',
  function($scope, $routeParams, content) {

  	// Post ID from URL
  	var postId = $routeParams.postId;

  	// Mock API call.
  	$scope.post = content.get(postId);
  		
  	// Debug
  	console.log($scope.post);
    
  }]);
