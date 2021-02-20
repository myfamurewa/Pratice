function countPrimes (n: number): number {
    let isPrime = new Array(n);
    for (var i = 2; i < n; i++) {
      isPrime[i] = true;
   }
   for (var i = 2; i * i < n; i++) {
          if (!isPrime[i]) continue;
          for (var j = i * i; j < n; j += i) {
             isPrime[j] = false;
          }
       }
   var count = 0;
   for (var i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
   return count;
}

var countPrimesII= function (n) {
    let primes = new Array(n).fill(true);
    primes[0] = false, primes[1] = false;
    for (let i = 2; i < n; i++) {
        for (let j = i**2; j < n; j += i) {
            primes[j] = false;
        }
    }
    return primes.filter(bool => bool == true).length;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};

const countPrimesIII = (n, count = 0, array = []) => {
    for (let i = 2; i < n; i++) {
      if (array[i]) continue
      else count++
      for (let j = i+i; j <= n; j+=i) array[j] = true
    }
    
    return count
  };