function findDigits(n: number): number {
  let digitsArr = `${n}`.split("").map((digit) => Number(digit));
  console.log(digitsArr);
  let divisibleCount = 0;
  for (let i = 0; i < digitsArr.length; i++) {
    if (n % digitsArr[i] === 0) {
      divisibleCount++;
    }
  }
  return divisibleCount;
}

let test1 = findDigits(1012);
console.log(test1);
