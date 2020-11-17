function nthFibo(n) {
    let memo = [0, 1]
    function fib(n) {
      var result = memo[n];
        if (typeof result !== 'number') {
          result = fib(n - 1) + fib(n - 2);
          memo[n] = result;
        }
        return result;
    }
    return fib(n)
  }