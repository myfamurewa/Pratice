var findMaxConsecutiveOnes = function(nums) {
    count = 0
    maxcount = 0
    for(let i = 0; i < nums.length; i++){
        
        if(nums[i] === 1){
            count++
            if(count > maxcount){
            maxcount = count
        }
        } else {
            count = 0
        }
    }
    return maxcount
};