angular
	.module('myApp')
	.controller('primeNumberController', function($scope){
		$scope.message = '';
		$scope.check = function(){
			console.log($scope.primeNumber);
			if (isPrime($scope.primeNumber))
				$scope.message = "It's a prime number.";
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
	});