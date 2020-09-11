var maxProduct = function(nums) {
    
    let res = -Number.MAX_VALUE;
    let min = 1;
    let max = 1;
    for (let num of nums) {
      [min, max] = [
        Math.min(num, min * num, max * num),
        Math.max(num, min * num, max * num),
      ];
      res = Math.max(res, max);
    }
    return res;
};

console.log(maxProduct([]))
console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([0,2]))
console.log(maxProduct([3,-1,4]))
console.log(maxProduct([-1, 3, 4]))
console.log(maxProduct([3,-7, 8, -15]))
console.log(maxProduct([3,4,5,6,-8,-90,-76]))

// maxValue = -9999
    // curValue = 1
    // // if(nums[Math.floor(nums.length/2)] < 0 && nums.length === 3){
    // //     return Math.max.apply(null, nums)
    // // }

    // for(let i = 0; i < nums.length; i++){
    //     console.log(curValue)
        
    //     if(curValue === 0){
    //         curValue = 1
    //     }
    //     console.log(i)
    //     i++
    //     console.log(i)
    //     curValue *= nums[i]
    //     if(curValue >= maxValue)
    //         maxValue = curValue
    //     }
    // }
    // return maxValue !== -9999? maxValue :  0