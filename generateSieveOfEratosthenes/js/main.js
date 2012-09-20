function generateInitialSieve(limit) {
	var sieve = [false, false];
	for (var i = 2; i <= limit; i++)
		sieve.push(undefined); 
  return sieve;
}

function markPrimeAndComposites(prime, sieve, limit) {
  sieve[prime] = true;
  for (var i = prime * 2; i <= limit; i += prime)
    sieve[i] = false;
}

function getNextPrime(prime, sieve, limit) {
  for (var i = prime || 0; i < limit; i++)
    if (sieve[i] == undefined) return i;
}

function generateSieveOfEratosthenes(limit) {
  var primes = [];
  if (limit < 2) return primes;
  var sieve = generateInitialSieve(limit);
  var prime;
  while ((prime = getNextPrime(prime, sieve, limit)) && primes.push(prime))
    markPrimeAndComposites(prime, sieve, limit);
  return primes;
}