function naiveFactorial(n) {
    let result = 1
    let count = n
    while(count > 0){
        result = result * count
        count--
    }
    return result
}

function factorial(n) {
    if(n >= 1) return n * factorial(n -1)
    else return 1;
}
console.log("This is factorial without recursion", naiveFactorial(5))
console.log("This is factorial with recursion", naiveFactorial(18))
console.log("This is factorial with recursion", factorial(5))
console.log("This is factorial with recursion", factorial(18))