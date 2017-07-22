angular
	.module('myApp')
	.controller('fibonacciController', ['$scope', function($scope){
			$scope.check = function(){
				$scope.message='';
				$scope.fibonacciSeries='';
				if ($scope.fibonacciNumber == undefined ) {
					$scope.message = 'Please enter some number.';
				}
				else if( !($scope.fibonacciNumber >= 0)){
					$scope.message = 'Please enter some number greater then 0.';
				}
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
	
		}]);