function addDigits(num: number): number {
    if(num <= 9){
        return num
    }
    let numsplit = String(num).split("").map(number => Number(number)).reduce((acc, cv) => {
        return acc + cv
    }, 0)
    if(numsplit <= 9){
        return numsplit
    }
    while(numsplit > 9){
        numsplit = String(numsplit).split("").map(number => Number(number)).reduce((acc, cv) => {
            return acc + cv
        }, 0)
    }
    return numsplit
};

function addDigitsII(num: number): number {
    if(num <= 9){
        return num
    }
    let newNum = num
    while(newNum > 9){
        let tempVal = 0
        let numString = String(newNum)
        for(let i = 0; i < numString.length; i++){
            tempVal += Number(numString[i])
        }
        newNum = tempVal
    }
    return newNum
}

function addDigitsOptimal(num: number): number {
    return 1 + (num - 1) % 9
}


console.log(addDigits(38))
console.log(addDigits(99))
