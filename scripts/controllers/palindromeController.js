angular
	.module('myApp')
	.controller('palindromeController', ['$scope', '$http', 'palindromeFactory', function($scope, $http, palindromeFactory){

			$scope.check = function(){
				$scope.message='';
				$scope.messageSuccess='';
				if ($scope.palindromeString == undefined ) {
					$scope.message = 'Please enter something to check for palindrome.';
				}

				palindromeFactory
					.checkpalindrome($scope.palindromeString)
					.then(function(resp){
						
						if (resp.data.status == 'success') {
							$scope.messageSuccess = resp.data.message;
						}
						else if (resp.data.status == 'failed'){
							$scope.message = resp.data.message;
						}
					
					}, function(error){
						$scope.message = 'There is some issue on our side. Let us resolve and get back to you.';
					});
			};
		}]);