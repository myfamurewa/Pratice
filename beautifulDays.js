function beautifulDays (i, j , k) {
    // i is the beginning of a range of numbers
    // j is the end of the range of numbers
    // we want to find the numbers in this range that are beautiful
    // beautiful meaning that i  - i(reversed) % k === 0
    // return the number of beautiful days
    let beautifulDays = 0
    for(let l = i; l < j + 1; l++){
        let reversed = l.toString().split("").reverse()
        if(reversed[0] === "0"){
            reversed.shift()
        }
        let reversedNum = Number(reversed.join(""))
        if(Math.abs(l - reversedNum) % k === 0){
            beautifulDays++
        }
    }
    return beautifulDays
} // it works but it is too slow in some case
 // with the console.logs removed it passes the tests fast enough
 // always remember ot comment them out before testing the code

console.log(beautifulDays(20, 23, 6))
