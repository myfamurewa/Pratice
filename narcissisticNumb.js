const narcNum = (value) => {
    let numArr = value.toString().split("")
    numArr = numArr.map(element => {
        return parseInt(element)
    });
    let sum = numArr.reduce((acc, cv) => {
        return acc + Math.pow(cv, numArr.length)
    }, 0)
    return sum === value ? true : false
}
console.log(narcNum(2456))