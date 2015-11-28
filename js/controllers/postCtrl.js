appControllers.controller('PostCtrl', ['$scope', '$routeParams', 'content',
  function($scope, $routeParams, content) {

	console.log("postCtrl.js Initialized.");

  	// Post ID from URL
  	var postId = $routeParams.postId;

  	// Mock API call.
  	$scope.post = content.get(postId);
  		
  	// Debug
  	console.log($scope.post);
    
  }]);
