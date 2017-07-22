/**
 * @author Mahesh Patel
 * @description This is fibonacci component which will match to lt-fibonacci html tag
 */
angular
	.module('myApp')
	.component('ltFibonacci', {
			templateUrl: '../../../pages/fibonacci.html',
			controller : ['palindromeFactory', function(palindromeFactory){
							var self = this;
							
							//this function will be called on 'Generate' button click
							self.generate = function(){
								self.message='';
								self.fibonacciSeries='';
								if (self.fibonacciNumber == undefined ) {
									self.message = 'Please enter some number.';
								}
								else if( !(self.fibonacciNumber >= 0)){
									self.message = 'Please enter some number greater then 0.';
								}
								self.fibonacciSeries = generateFibonacci(self.fibonacciNumber);
							};

							//this function will generate the fibonacci series
							generateFibonacci = function(fibonacciNumber){
								var output = '';
								//for the starting condition if input is 0 or 1
								fibonacciNumber == 0 ? output += String(0) : '';
								fibonacciNumber >= 1 ? output += String('0 1') : '';
								
								//for the starting condition if input > 1
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
						}]//controller-end
		});