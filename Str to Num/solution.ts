function strToNum(str: string): number {
    function isNumeric(num){
        return /^-?\d+$/.test(num);
      }

    if(!isNumeric(str)){
        return -1
    }
    let value = 0
    let tensPlace = 0
    for(let i = str.length - 1; i >= 0; i--){
        if(!isNumeric(str[i])){
            continue
        }
        value += parseInt(str[i]) * Math.pow(10, tensPlace)
        tensPlace++
    }
    return str[0] === "-"? value * -1 : value;
}

console.log(strToNum("17"))
console.log(strToNum("-56"))
console.log(strToNum("4321"))
