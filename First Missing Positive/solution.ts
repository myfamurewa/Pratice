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

function firstMissingPositiveAlt(nums: number[]): number {
    let newNums = nums.sort((a, b) => a - b).filter(num => num > 0)
    let lowest = 1
    for(let num of newNums){
        if(num === lowest){
            lowest++
        }
    }
    return lowest
}

function firstMissingPositiveConstmem(nums: number[]): number {
    for(let i = 0; i < nums.length; i++){
        while(nums[i]>0 && nums[i] < nums.length && nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]){
            let temp = nums[i]
            nums[i] = nums[temp - 1]
            nums[temp - 1] = temp
        }
    }
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== j + 1){
            return j + 1
        }
    }
    return nums.length + 1
}
let test12 = [1,2,0]
let test13 = [3,4,-1,1]
let test14 = [7,8,9,11,12]
let test15 = [1,2,3,4,5,6,7,8,9,20]

