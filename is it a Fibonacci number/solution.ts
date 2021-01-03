function isfibo(n: number): boolean {
  function isSquare(n: number): boolean {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
  if (isSquare(5 * (n * n) - 4) || isSquare(5 * (n * n) + 4)) {
    return true;
  } else {
    return false;
  }
}

console.log(isfibo(5));
console.log(isfibo(0));
console.log(isfibo(34));
console.log(isfibo(27));
