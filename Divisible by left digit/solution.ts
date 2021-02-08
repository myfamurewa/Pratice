function divisibleByLeft(n: number): boolean[] {
    if(n < 10){
        return [false]
    }
    let returnArr = [false]
    let values = n.toString()
    let previousNum = Number(values[0])
    for(let i = 1; i < values.length; i++){
        let currentNum = Number(values[i])
        if(currentNum%previousNum === 0){
            returnArr.push(true)
        } else {
            returnArr.push(false)
        }
        previousNum = currentNum
    }
    return returnArr
}