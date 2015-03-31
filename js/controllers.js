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
  	},{
		img : "images/thumbs/evertrue-amp.png",
		link: "#post/evertrue-amp",
		nameSmall : "EverTrue's",
		nameLarge : "Portal"
	},{
		img : "images/thumbs/texture-channel.png",
		link: "#post/texture-channel",
		nameSmall : "Texture",
		nameLarge :  "Channel"
	},{
		img : "images/thumbs/branding.png",
		link: "#gallery/branding Branding",
		nameSmall : "Design",
	},{
		img : "images/thumbs/texturetechnologies.png",
		link: "#post/texturetechnologies TextureTechnologies",
		nameSmall : "com",
	},{
		img : "images/thumbs/clintvalentine.png" ,
		link: "#post/clintvalentine ClintValentine",
		nameSmall : "com",
	},{

		img : "images/thumbs/linkedin-grader.png",
		link: "#post/linkedin-grader",
		nameSmall : "EverTrue\'s",
		nameLarge : "LinkedIn Grader"
	},{

		img : "images/thumbs/texture-report.png" ,
		link: "#post/texture-report",
		nameSmall : "Texture Report.com",
	},{

		img : "images/thumbs/fire.png" ,
		link: "#gallery/fire Fire",
		nameSmall : "Photography",
	},{

		img : "images/thumbs/fitbit-challenge.png",
		link: "#post/fitbit-challenge",
		nameSmall : "EverTrue\'s",
		nameLarge : "FitBit Challenge",

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
		nameSmall : "EverTrue\'s",
		nameLarge : "E-mail Campaigns",
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

	// @TODO | Add:
	// Tablelist.com
	// Tablelist Admin
	// Swarm Navigation
	// Capstone
	// Software Development
	
			
  }]);

appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {


    
  }]);


// <li class="mix landscape"><a href="images/gallery/landscape-etna.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-etna.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-etna-2.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-etna-2.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-favignana.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-favignana.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-naxos.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-naxos.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-naxos-2.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-naxos-2.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-nevada.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-nevada.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-renfe.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-renfe.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-santorini.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-santorini.jpg" /></a></li>
// <li class="mix landscape"><a href="images/gallery/landscape-waterfall.jpg" class="fancybox" rel="landscape" title=""><img src="images/thumbs/landscape-waterfall.jpg" /></a></li>

// <li class="mix branding"><a href="images/gallery/branding-ttc-banner-better.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/branding-ttc-banner-better.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/branding-ttc-channel-flier.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/branding-ttc-channel-flier.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/branding-ttc-our-knowledge.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/branding-ttc-our-knowledge.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/branding-ttc-print-cifst.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/branding-ttc-print-cifst.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/branding-ttc-crunch.jpg" class="fancybox" rel="branding" title=""><img src="images/thumbs/branding-ttc-crunch.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/branding-ttc-texture-analysis.jpg" class="fancybox" rel="branding" title=""><img src="images/thumbs/branding-ttc-texture-analysis.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/branding-ttc-world-leaders.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/branding-ttc-world-leaders.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/logo-firebrand.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/logo-firebrand.png" /></a></li>
// <li class="mix branding"><a href="images/gallery/logo-texture-technologies.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/logo-texture-technologies.jpg" /></a></li>
// <li class="mix branding"><a href="images/gallery/logo-video-conversations.png" class="fancybox" rel="branding" title=""><img src="images/thumbs/logo-video-conversations.png" /></a></li>

// <li class="mix fire"><a href="images/gallery/fire-beaver.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-beaver.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-sword.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-sword.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-drew.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-drew.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-fan.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-fan.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-fan-2.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-fan-2.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-fan-3.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-fan-3.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-fan-4.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-fan-4.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-mushroom.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-mushroom.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-poi.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-poi.jpg" /></a></li>
// <li class="mix fire"><a href="images/gallery/fire-trevor.jpg" class="fancybox" rel="fire" title="Wildfire 2013"><img src="images/thumbs/fire-trevor.jpg" /></a></li>

// <li class="mix macro"><a href="images/gallery/macro-bread.jpg" class="fancybox" rel="macro" title="Texture Technologies Macro Photography"><img src="images/thumbs/macro-bread.jpg" /></a></li>
// <li class="mix macro"><a href="images/gallery/macro-cheeto.jpg" class="fancybox" rel="macro" title="Texture Technologies Macro Photography"><img src="images/thumbs/macro-cheeto.jpg" /></a></li>
// <li class="mix macro"><a href="images/gallery/macro-gel.jpg" class="fancybox" rel="macro" title="Texture Technologies Macro Photography"><img src="images/thumbs/macro-gel.jpg" /></a></li>
// <li class="mix macro"><a href="images/gallery/macro-pepper.jpg" class="fancybox" rel="macro" title="Texture Technologies Macro Photography"><img src="images/thumbs/macro-pepper.jpg" /></a></li>
// <li class="mix macro"><a href="images/gallery/macro-pill.jpg" class="fancybox" rel="macro" title="Texture Technologies Macro Photography"><img src="images/thumbs/macro-pill.jpg" /></a></li>
// <li class="mix macro"><a href="images/gallery/macro-pill-2.jpg" class="fancybox" rel="macro" title="Texture Technologies Macro Photography"><img src="images/thumbs/macro-pill-2.jpg" /></a></li>
// <li class="mix macro"><a href="images/gallery/macro-syringe.jpg" class="fancybox" rel="macro" title="Texture Technologies Macro Photography"><img src="images/thumbs/macro-syringe.jpg" /></a></li>
