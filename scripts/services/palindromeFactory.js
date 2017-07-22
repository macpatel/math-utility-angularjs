/**
 * @author Mahesh Patel
 * @description This file is a factory/service for palindrome functionality
 */
angular
	.module('myApp')
	.factory('palindromeFactory', ['$http', function($http){
		return{
			checkpalindrome: function(palindromeString){
				return $http
					.get('/checkpalindrome.php?palindromeString=' + palindromeString);
			}
		}
	}]);