function removeDuplicates(nums: number[]): number {
    // let count = {}
    // for(let i = 0; i < nums.length; i++){
    //     if(count[nums[i]]){
    //         if(count[nums[i]] >= 2){
    //             nums.splice(i, 1)
    //         } else {
    //             count[nums[i]] += 1
    //         }
    //     } else {
    //         count[nums[i]] = 1
    //     }
    // }
    // return nums.length
    // let current = nums[0]
    // let currentCount = 0
    // for(let i = 0; i < nums.length; i++){
    //     if(current === nums[i]){
    //         currentCount += 1
    //         if(currentCount > 2){
    //             nums.splice(i, 1)
    //         }
    //     } else {
    //         current = nums[i]
    //         currentCount = 1
    //     }
    // }
    // return nums.length
    let j = 0;
    let i = 0;
  
    for (; i < nums.length; i += 1){
      if (nums[i] !== nums[i + 2]) {
        nums[j] = nums[i];
        j += 1;
      }
    }
  
    return j;
};