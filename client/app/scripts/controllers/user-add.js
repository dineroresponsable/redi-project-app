'use strict';

angular.module('rediApp')
  .controller('UserAddCtrl', function ($scope, User, $location) {
		$scope.user = {};
		$scope.step2 = false;
		$scope.step3 = false;
		$scope.step4 = false;
		$scope.saveUser = function() {
			User.post($scope.user).then(function() {
				$location.path('/user/' + $scope.user._id);
			});
		};
		$scope.toStep2 = function() {
			$scope.step2 = true;
			$scope.catActive = true;
		};
		$scope.toStep3 = function() {
			$scope.step2 = false;
			$scope.step3 = true;
		};
		$scope.toStep4 = function() {
			$scope.step3 = false;
			$scope.step4 = true;
		};

		angular.element('.to-step2').click(function() {
			angular.element('.to-step2').parent().addClass('unactive');
			angular.element(this).parent().removeClass('unactive').addClass('active');
		});
  });
