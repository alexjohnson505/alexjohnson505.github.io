
appControllers.controller('HomeCtrl', ['$scope', '$sce', 'pages',
  function($scope, $sce, pages) {

    console.log("homeCtrl.js Initialized.");

  	// Initialize
  	$scope.focused = -1;

  	$scope.focus = function(index){
  		$scope.focused = index;
  	}

  	// Load available pages
  	$scope.posts = pages.list();

  //  	// Sanitize HTML
	// angular.forEach($scope.posts, function(post){
	// 	post.title = $sce.trustAsHtml(post.title);
	// 	post.description = $sce.trustAsHtml(post.description);
	// });

  }
]);