
appControllers.controller('HomeCtrl', ['$scope', '$sce', 'content',
  function($scope, $sce, content) {

    console.log("homeCtrl.js Initialized.");

  	// Initialize
  	$scope.focused = -1;

  	$scope.focus = function(index){
  		$scope.focused = index;
  	}

  	// Load available content
  	$scope.posts = content.list();

 //  	// Sanitize HTML
	// angular.forEach($scope.posts, function(post){
	// 	post.title = $sce.trustAsHtml(post.title);
	// 	post.description = $sce.trustAsHtml(post.description);
	// });

  }
]);