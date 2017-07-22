/**
 * @author Mahesh Patel
 * @description This is the starting point of the app
  */
angular
	.module('myApp', ['ngRoute', 'ngResource'])
	.config(function($locationProvider, $routeProvider) {
		//Application's route cofiguration
		$routeProvider.
			when('/', {
			  templateUrl: '../pages/home.html'
			}).		
			when('/prime', {
			  template: '<lt-prime-number></lt-prime-number>'
			}).			
			when('/palindrome', {
			  template: '<lt-palindrome></lt-palindrome>'
			}).
			when('/fibonacci', {
			  template: '<lt-fibonacci></lt-fibonacci>'
			}).
			otherwise('/');
		//Remove the leading # from the url
		$locationProvider.html5Mode(true);
	});

