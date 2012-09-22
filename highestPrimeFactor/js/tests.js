function assert(condition, message) {
  if (!condition) { throw new Error(message); }
}

function testgenerateSieveOfEratosthenes() {
  var primes = generateSieveOfEratosthenes(10);
  assert(primes instanceof Array, "generateSieveOfEratosthenes should return an array");
  assert(primes[0] == 2, "generateSieveOfEratosthenes should return 2 as its first number");
  assert(primes[1] == 3, "generatePrimes should return 3 as its second number");
  assert(primes[2] == 5, "generatePrimes should return 5 as its third number");
  assert(primes[3] == 7, "generateSieveOfEratosthenes should return 7 as its last number");
  assert(primes.length == 4, "generateSieveOfEratosthenes should return 4 numbers");
}

function testfindRoundedSquareRoot() {
	var squareRoot = findRoundedSquareRoot(25);
	assert(squareRoot == 5, "findRoundedSquareRoot should return 5 with an input of 25")
}