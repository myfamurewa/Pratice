Create a function that takes a number n and checks if each digit is divisible by the digit on its left. Return a boolean array depending on the condition checks.

Examples
divisibleByLeft(73312) ➞ [false, false, true, false, true]
// no element left to 7 = false
// 3/7 = false
// 3/3 = true
// 1/3 = false
// 2/1 = true

divisibleByLeft(1) ➞ [false]

divisibleByLeft(635) ➞ [false, false, false]
Notes
The array should always start with false as there is no digit to the left of the first digit.