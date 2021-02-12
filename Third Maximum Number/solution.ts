function thirdMax(nums: number[]): number {
    let sortedNums = Array.from(new Set(nums.sort((a, b) => b - a)))
    if(sortedNums.length < 3){
        return sortedNums[0]
    }
    return sortedNums[2]
};

let test2 = [2,2,3,1]
console.log(thirdMax([1,1,2]))
console.log(thirdMax(test2))