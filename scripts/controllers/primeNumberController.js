angular
	.module('myApp')
	.controller('primeNumberController', ['$scope', function($scope){
			
			$scope.check = function(){
				$scope.message='';
				$scope.messageSuccess='';
				if ($scope.primeNumber == undefined ) {
					$scope.message = 'Please enter some number.';
				}
				else if( !($scope.primeNumber >= 0)){
					$scope.message = 'Please enter some number greater then 0.';
				}
				else if (isPrime($scope.primeNumber))
					$scope.messageSuccess = "Hurray! It's a prime number.";
				else
					$scope.message = "It's not a prime number.";
			};
	
			isPrime = function(primeNumber){
				var m=0;
				var n = primeNumber;
				m=n/2;
				if (primeNumber == 0 || primeNumber == 1) return false;
				for (var i = 2; i <= m; i++) {
					if(n%i == 0){
						return false;
					}
				}
				return true;
	
			}
		}]);