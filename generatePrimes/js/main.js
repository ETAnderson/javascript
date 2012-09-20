function generateInitialSieve(max) {
	var sieve = [false, false];
	for (var i = 2; i <= max; i++)
		sieve.push(undefined); 
  return sieve;
}

function markPrimeAndComposites(prime, sieve, max) {
  sieve[prime] = true;
  for (var i = prime * 2; i <= max; i += prime)
    sieve[i] = false;
}

function getNextPrime(sieve, max) {
  for (var i = 0; i < max; i++)
    if (sieve[i] == undefined) return i;
}

function generatePrimes(max) {
  var primes = [];
  if (max < 2) return primes;
  var sieve = generateInitialSieve(max);
  var prime;
  while ((prime = getNextPrime(sieve, max)) && primes.push(prime))
    markPrimeAndComposites(prime, sieve, max);
  return primes;
}