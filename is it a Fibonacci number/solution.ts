function isfibo(n: number): boolean {
  function isSquare(n: number): boolean {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
  if (isSquare(5 * (n * n) - 4) || isSquare(5 * (n * n) + 4)) {
    return true // in the challenge this should be the string "isFibo";
  } else {
    return false // in the challenge this should be the string "isNotFibo";
  }
}

console.log(isfibo(5));
console.log(isfibo(0));
console.log(isfibo(34));
console.log(isfibo(27));
