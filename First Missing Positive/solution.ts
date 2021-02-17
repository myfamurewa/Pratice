function firstMissingPositive(nums: number[]): number {
    let sortedNums = Array.from(new Set(nums.sort((a, b) => a - b).filter(num => num > 0)))
    let correctNum = 1
    console.log(sortedNums)
    for(let num of sortedNums){
        if(num !== correctNum){
            return correctNum
        }
        correctNum++
    }
    return correctNum 
};

let test12 = [1,2,0]
let test13 = [3,4,-1,1]
let test14 = [7,8,9,11,12]
let test15 = [1,2,3,4,5,6,7,8,9,20]

console.log(firstMissingPositive(test15))