function sevenBoom(arr) {
let bigArr = []
 for (let index = 0; index < arr.length; index++) {   
    let strung = `${arr[index]}`
    strung = strung.split("")
    bigArr.push(strung)
    }
 bigArr = [].concat.apply([], bigArr)
 return bigArr.includes("7") ? "Boom!" : "there is no 7 in the array"
}

console.log(sevenBoom([2, 6, 7, 9, 3]))
console.log(sevenBoom([76, 55, 44, 32]))
console.log(sevenBoom([86, 48, 100, 66]))
console.log(sevenBoom([33, 68, 400, 5]))