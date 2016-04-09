'use strict';

angular.module('rediApp')
  .controller('UsersCtrl', function ($scope, User) {
    /*$scope.listUser = [
    	{
    		title: 'Social Network Mean 1',
    		url: 'http://youtube.com/embed/lcHlywuHNwI'
    	},
    	{
    		title: 'Social Network Mean 2',
    		url: 'http://youtube.com/embed/aM18UsOFZw8'
    	},
    	{
    		title: 'Social Network Mean 3',
    		url: 'http://youtube.com/embed/USKaHwlCQX4'
    	}
    ];*/
    $scope.listUser = User.getList().$object;
  });
