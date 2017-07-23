/**
 * @author Mahesh Patel
 * @description This is palindrome component which will match to lt-palindrome html tag
 */
angular
	.module('myApp')
	.component('ltPalindrome', {
			templateUrl: '../../../pages/palindrome.html',
			controller : function(palindromeFactory){
				var self = this;
				//this function will be invoke on hit of 'check' button
				self.check = function(){
					self.message='';
					self.messageSuccess='';
					if (self.palindromeString == undefined ) {
						self.message = 'Please enter something to check for palindrome.';
					}
					else{				
						//Call the palindrome service/factory to fetch the result from server
						palindromeFactory
							.checkpalindrome(self.palindromeString)
							.then(function(resp){
								//this callback handles the success response
								if (resp.data.status == 'success') {
									self.messageSuccess = resp.data.message;
								}
								else if (resp.data.status == 'failed'){
									self.message = resp.data.message;
								}
							
							})
							.catch(function(error){
								//this callback handles the error response
								self.message = 'There is some issue on our side. Let us resolve and get back to you.';
							});
					}

				};
			}//controller
		});