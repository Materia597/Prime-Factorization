# Prime-Factorization
# Three Js functions that can find if an integer is prime, return an array of numbers that are prime, and completely prime factor a number

primeCheck(x) takes a number as a value, and it will either output a true or false depending on if it's prime or not. It will also throw an error if the input is not an integer or less than or equal to zero.

primeStep(min, max) takes two number as a value, and the function will run primeCheck for each integer in the range, and then return the numbers that are prime as an array

primeFactor(x) takes one number as an input, and it executes primeStep to find the available primes to use for the factorization. primeFactor will output an array of the prime factors, or throw an error if the inmput is invalid or a failsafe number is triggered.

