<?php

$palindromeString = htmlspecialchars($_GET['palindromeString']);
$errors = array();

if (!isset($palindromeString) || empty($palindromeString)) {
	$errors['status'] = 'failed';
	$errors['message'] = 'Enter something to check for palindrome.';
}
else{
	if (strrev($palindromeString) == $palindromeString) {
		$errors['status'] = 'success';
		$errors['message'] = 'Hurray! It\'s a palindrome.';
	}
	else{
		$errors['status'] = 'failed';
		$errors['message'] = 'It\'s not a palindrome.';
	}
}
echo json_encode($errors);
?>