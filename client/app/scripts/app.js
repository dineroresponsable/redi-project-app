'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('rediApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/create/user', {
        templateUrl: 'views/user-add.html',
        controller: 'UserAddCtrl',
        controllerAs: 'userAdd'
      })
      .when('/user/:id', {
        templateUrl: 'views/user-view.html',
        controller: 'UserViewCtrl',
        controllerAs: 'userView'
      })
      .when('/user/:id/delete', {
        templateUrl: 'views/user-delete.html',
        controller: 'UserDeleteCtrl',
        controllerAs: 'userDelete'
      })
      .when('/user/:id/edit', {
        templateUrl: 'views/user-edit.html',
        controller: 'UserEditCtrl',
        controllerAs: 'userEdit'
      })
      .otherwise({
        redirectTo: '/users'
      });
  })
  .factory('UserRestangular', function(Restangular) {
      return Restangular.withConfig(function(RestangularConfigurer) {
          RestangularConfigurer.setRestangularFields({id: '_id'});
      });
  })
  .factory('User', function(UserRestangular) {
      return UserRestangular.service('user');
  });
