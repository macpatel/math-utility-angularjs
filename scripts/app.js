angular
	.module('myApp', ['ngRoute', 'ngResource'])
	.config(function($locationProvider, $routeProvider) {
		$routeProvider.
			when('/', {
			  templateUrl: '../pages/home.html'
			  // controller: 'primeNumberController'
			}).		
			when('/prime', {
			  templateUrl: '../pages/prime.html',
			  controller: 'primeNumberController'
			}).			
			when('/palindrome', {
			  templateUrl: '../pages/palindrome.html',
			  controller: 'palindromeController'
			}).
			when('/fibonacci', {
			  templateUrl: '../pages/fibonacci.html',
			  controller: 'fibonacciController'
			}).
			otherwise('/');
		$locationProvider.html5Mode(true);
	});
	// .controller('primeNumberController', function($scope){
	// 	$scope.primeNumber = 232;
	// });

