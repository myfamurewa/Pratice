function dominantIndex(nums: number[]): number {
    let max = Math.max(...nums)
    let secondMost = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > secondMost && nums[i] < max){
            secondMost = nums[i]
        }
    }
    return max >= secondMost * 2 ? nums.indexOf(max) : -1
};