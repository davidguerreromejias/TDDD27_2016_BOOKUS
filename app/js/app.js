'use strict';

/* App Module */

var bookusApp = angular.module('bookusApp', [
  'ngRoute',
  'bookusControllers'
]);

bookusApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'partials/book-list.html',
        controller: 'BookListCtrl'
      }).
      when('/books/:bookId', {
        templateUrl: 'partials/book-detail.html',
        controller: 'BookDetailCtrl'
      }).
      when('/user/:userId', {
        templateUrl: 'partials/user-detail.html',
        controller: 'UserCtrl'
      }).
      otherwise({
        redirectTo: '/books'
      });
  }]);