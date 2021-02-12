function numberOfSteps (num: number): number {
    let currentValue = num
    let steps = 0
    while(currentValue > 0){
        if(currentValue % 2 === 0){
            currentValue /= 2
        } else {
            currentValue -= 1
        }
        steps++
    }
    return steps
};

function numberOfStepsRecursive (num: number): number {
    if(num === 0) return 0
    if(num%2 === 0) return 1 + numberOfStepsRecursive(num/2)
    return 1 + numberOfStepsRecursive(num - 1)
}

function numberOfStepsBitwise (num: number): number {
    let s = num.toString(2)
    let sCount = 0
    for(let bit of s){
        if(bit === '1'){
            sCount++
        }
    }
    return sCount + s.length - 1
}