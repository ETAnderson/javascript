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

function testgenerateSieveOfEratosthenes2() {
  var primes = generateSieveOfEratosthenes(20);
  assert(primes instanceof Array, "generateSieveOfEratosthenes should return an array");
  assert(primes[0] == 2, "generateSieveOfEratosthenes should return 2 as its first number");
  assert(primes[1] == 3, "generateSieveOfEratosthenes should return 3 as its second number");
  assert(primes[2] == 5, "generateSieveOfEratosthenes should return 5 as its third number");
  assert(primes[3] == 7, "generateSieveOfEratosthenes should return 7 as its fourth number");
  assert(primes[4] == 11, "generateSieveOfEratosthenes should return 11 as its fifth number");
  assert(primes[5] == 13, "generateSieveOfEratosthenes should return 13 as its sixth number");
  assert(primes[6] == 17, "generateSieveOfEratosthenes should return 17 as its seventh number");
  assert(primes[7] == 19, "generateSieveOfEratosthenes should return 19 as its last number");
  assert(primes.length == 8, "generateSieveOfEratosthenes should return 7 numbers");
}

function runTests() {
	testgenerateSieveOfEratosthenes();
	testgenerateSieveOfEratosthenes2();
}

runTests();