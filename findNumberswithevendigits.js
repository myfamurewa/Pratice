var findNumbers = function(nums){
    count = 0
    for(let i = 0; i < nums.length; i++){
        current = nums[i] + ""
        if(current.length % 2 === 0 && current !== ""){
            count++
        }
    }
    return count
}