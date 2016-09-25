appControllers.controller('PostCtrl', ['$rootScope', '$scope', '$routeParams', 'pages',
  function($rootScope, $scope, $routeParams, pages) {

	 console.log("postCtrl.js Initialized.");

  	// Post ID from URL
  	var postId = $routeParams.postId;

  	// Mock API call.
  	$scope.post = pages.get(postId);

    $rootScope.pageTitle =  $scope.post.name || null;

    // 
    $scope.posts = pages.list();

    // Default featured iamge
    if ($scope.post.images){
    	$scope.featuredImage = $scope.post.images[0];
    }

    $scope.setFeaturedImage = function(image){
      $scope.featuredImage = image;
    }
    
  }]);
