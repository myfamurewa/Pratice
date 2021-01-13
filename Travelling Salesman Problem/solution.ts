function factorialize(num: number): number {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }



function paths(n: number): number{
      return factorialize(n)
}

console.log(paths(1))
console.log(paths(2))
console.log(paths(3))
console.log(paths(4))
console.log(paths(5))