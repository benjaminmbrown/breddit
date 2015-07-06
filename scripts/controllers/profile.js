'use strict';

app.controller('ProfileCtrl', 
	function($scope, $routeParams, Post, User){
		//first find user by checking the username from routeparams, and 'finding'it with the User service
		$scope.user=User.findByUsername($routeParams.username);
		//when user is loaded, run the profile functions
		$scope.user.$on('loaded', function(){
			populatePosts();
			populateComments();
		});
		//display posts

		function populatePosts(){
			$scope.posts = {};

		//loop through the user posts by postID
			angular.forEach($scope.user.posts, function(postId){
				$scope.posts[postId] = Post.find(postId);
			});
		}

		//display comments

		function populateComments(){
			$scope.comments ={};

			angular.forEach($scope.user.comments, function(comment){
				var post = Post.find(comment.postId);
				post.$on('loaded',function(){
						$scope.comments[comment.id]= post.$child('comments').$child(comment.id);
						$scope.commentedPosts[comment.postId]=post;
				});
			});
		}

			$scope.removeComment = function (comment, commentId) {
	  			Post.deleteComment($scope.post, comment, commentId);
			};
});