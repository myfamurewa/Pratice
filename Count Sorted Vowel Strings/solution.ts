function countVowelStrings(n: number): number {
    return 5 + 10 * combination(n-1, 1) + 10 * combination(n-1, 2) + 5 * combination(n-1, 3) + combination(n-1, 4);
  };
  
  function combination(n, k) {
      if (k === 1)
          return n;
      
      return combination(n-1, k-1)*n/k;
  }