'use strict';
/* global app:true */

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/users/:username', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
       .when('/charts',{
        templateUrl: 'views/charts.html',
        controller: 'barChartCtrl'
      })
       .when('/voting',{
        templateUrl: 'views/elections.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FIREBASE_URL', 'https://bang-news.firebaseio.com/');
