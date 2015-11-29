appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'pages',
  function($scope, $routeParams, pages) {

	console.log("postCtrl.js Initialized.");

  	// Post ID from URL
  	var postId = $routeParams.postId;

  	// Mock API call.
  	$scope.post = pages.get(postId);

    // 
    $scope.posts = pages.list();
  }]);
