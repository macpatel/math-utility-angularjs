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