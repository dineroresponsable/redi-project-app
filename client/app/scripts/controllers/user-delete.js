'use strict';

angular.module('rediApp')
  .controller('UserDeleteCtrl', function ($scope, $routeParams, User, $location) {
    	$scope.user = User.one($routeParams.id).get().$object;
    	$scope.deleteUser = function() {
    		$scope.user.remove().then(function() {
    			$location.path('/users');
    		});
    	};
    	$scope.back = function() {
    		$location.path('/user/' + $routeParams.id);
    	};
  });