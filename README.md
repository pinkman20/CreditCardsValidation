# CreditCardsValidation
Script for validating credit cards - checking valid/invalid credit cards and sorting them by company


In this script there are examples of valid, invalid and mystery credit cards. The project is based on checking where does certain card belongs with validation function check.

Validation function is based on Luhn algoritm. 

The calculations in the Luhn algorithm can be broken down as the following steps:

1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
3. Sum up all the digits in the credit card number.
4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.


Later on, function is written based on checking first digit of invalid cards to which company card belongs. 

For example if the first digit is 3, card belongs to Amex (American express), if the digit is number 4 card belongs to Visa etc...
