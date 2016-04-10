'use strict';

angular.module('rediApp')
  .controller('UserAddCtrl', function ($scope, User, $location) {
		$scope.user = {};
		$scope.step2 = false;
		$scope.step3 = false;
		$scope.step4 = false;
		$scope.saveUser = function() {
			User.post($scope.user).then(function() {
				$location.path('/users');
			});
		};
		$scope.toStep2 = function() {
			$scope.step2 = true;
			console.log($scope.step2);
		};
		$scope.toStep3 = function() {
			$scope.step2 = false;
			$scope.step3 = true;
		};
		$scope.toStep4 = function() {
			$scope.step3 = false;
			$scope.step4 = true;
		};
  });
