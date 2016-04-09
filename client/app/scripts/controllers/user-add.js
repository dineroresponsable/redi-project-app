'use strict';

angular.module('rediApp')
  .controller('UserAddCtrl', function ($scope, User, $location) {
		$scope.user = {};
		$scope.saveUser = function() {
			User.post($scope.user).then(function() {
				$location.path('/users');
			});
		};
  });
