function removeElement(nums: number[], val: number): number {
    nums.sort((a,b) => a - b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val && nums[i + 1] === val){
            let count = 0
            for(let j = i; j < nums.length; j++){
                if(nums[j] === val){
                    count++
                }
            }
            nums.splice(i, count)
        }else if (nums[i] === val) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};