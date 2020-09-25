let largestNumber = A => {
let str = A.map(String)
str.sort((a, b) => (b + a).localeCompare(a + b))
return str.every(c => c == '0') ? '0' : Number(str.join(''))
}
let test = [10, 2]
let test2 = [3, 30, 34, 5, 9]
let test3 = [100, 54, 3, 21, 60, 4]
console.log(largestNumber(test))
console.log(largestNumber(test2))
console.log(typeof largestNumber(test3))