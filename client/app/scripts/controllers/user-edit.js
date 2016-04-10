'use strict';

angular.module('rediApp')
  .controller('UserEditCtrl', function ($scope, $routeParams, User, $location) {
    	$scope.editUser = true;
    	$scope.user = {};
    	User.one($routeParams.id).get().then(function(user) {
    		$scope.user = user;
    		$scope.saveUser = function() {
    			$scope.user.save().then(function() {
    				$location.path('/user/' + $routeParams.id);
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
    	});

        setTimeout(function() {
            angular.element('.to-step2').click(function() {
                angular.element('.to-step2').parent().addClass('unactive');
                angular.element(this).parent().removeClass('unactive').addClass('active');
            });
        }, 1000);
  });
