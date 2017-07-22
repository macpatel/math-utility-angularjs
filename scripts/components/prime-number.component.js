/**
 * @author Mahesh Patel
 * @description This is primnumber component which will match to lt-prime-number html tag
 */
angular
	.module('myApp')
	.component('ltPrimeNumber', {
			templateUrl: '../../../pages/prime.html',
			controller : function(){
				var self = this;

				//this function will be invoke on hit of 'check' button
				self.check = function(){
					self.message='';
					self.messageSuccess='';
					if (self.primeNumber == undefined ) {
						self.message = 'Please enter some number.';
					}
					else if( !(self.primeNumber >= 0)){
						self.message = 'Please enter some number greater then 0.';
					}
					else if (isPrime(self.primeNumber))
						self.messageSuccess = "Hurray! It's a prime number.";
					else
						self.message = "It's not a prime number.";
				};
				//this check if the number is prime or not
				isPrime = function(primeNumber){
					var m=0;
					var n = primeNumber;
					m=n/2;
					//0 and 1 are not prime numbers
					if (primeNumber == 0 || primeNumber == 1) return false;

					//check for number greater then 1
					for (var i = 2; i <= m; i++) {//loop from 2 to the n/2
						if(n%i == 0){//if the numbder divdes then its not a prime
							return false;
						}
					}
					return true;
		
				}
			}//controller
		});