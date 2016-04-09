'use strict';

angular.module('rediApp')
  .controller('UserViewCtrl', function ($scope, $routeParams, User) {
  		$scope.viewUser = true;
  		$scope.user = User.one($routeParams.id).get().$object;
  });
