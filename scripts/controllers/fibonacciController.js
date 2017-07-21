angular
	.module('myApp')
	.controller('fibonacciController', function($scope){
		$scope.message = '';
		$scope.check = function(){
			$scope.fibonacciSeries = generateFibonacci($scope.fibonacciNumber);
		};

		generateFibonacci = function(fibonacciNumber){
			var output = '';
			fibonacciNumber == 0 ? output += String(0) : '';
			fibonacciNumber >= 1 ? output += String('0 1') : '';

			var n1=0, n2=1, n3=1
			if (fibonacciNumber > 1)
				while( fibonacciNumber >= n3)
				{
					output += ' ' + String(n3);
					n1 = n2;
					n2 = n3;
					n3= n1 + n2;
				}
			return output;

		}

	});