function strToNum(str: string): number {
    function isNumeric(num){
        return /^-?\d+$/.test(num);
      }

    if(!isNumeric(str)){
        return -1
    }
    let digits = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3, 
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9, 
    }
    let value = 0
    let tensPlace = 0
    for(let i = str.length - 1; i >= 0; i--){
        if(!isNumeric(str[i])){
            continue
        }
        value += digits[str[i]] * Math.pow(10, tensPlace)
        tensPlace++
    }
    return str[0] === "-"? value * -1 : value;
}

console.log(strToNum("17"))
console.log(strToNum("-56"))
console.log(strToNum("4321"))
console.log(strToNum("Apple"))
console.log(strToNum("R301"))
console.log(strToNum("P-2020"))
console.log(strToNum("12.2"))
