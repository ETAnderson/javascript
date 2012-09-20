function assert(condition, message) {
  if (!condition) { throw new Error(message); }
}

function testGeneratePrimes() {
  var primes = generatePrimes(10);
  assert(primes instanceof Array, "generatePrimes should return an array");
  assert(primes[0] == 2, "generatePrimes should return 2 as its first number");
  assert(primes[1] == 3, "generatePrimes should return 3 as its second number");
  assert(primes[2] == 5, "generatePrimes should return 5 as its third number");
  assert(primes[3] == 7, "generatePrimes should return 7 as its last number");
  assert(primes.length == 4, "generatePrimes should return 4 numbers");
}

function testGeneratePrimes2() {
  var primes = generatePrimes(20);
  assert(primes instanceof Array, "generatePrimes should return an array");
  assert(primes[0] == 2, "generatePrimes should return 2 as its first number");
  assert(primes[1] == 3, "generatePrimes should return 3 as its second number");
  assert(primes[2] == 5, "generatePrimes should return 5 as its third number");
  assert(primes[3] == 7, "generatePrimes should return 7 as its fourth number");
  assert(primes[4] == 11, "generatePrimes should return 11 as its fifth number");
  assert(primes[5] == 13, "generatePrimes should return 13 as its sixth number");
  assert(primes[6] == 17, "generatePrimes should return 17 as its seventh number");
  assert(primes[7] == 19, "generatePrimes should return 19 as its last number");
  assert(primes.length == 8, "generatePrimes should return 7 numbers");
}

function runTests() {
	testGeneratePrimes();
	testGeneratePrimes2();
}

runTests();