var topKFrequent = function(nums, k) {
    let frequency = {}
    for(let i = 0; i < nums.length; i++){
        if(frequency[nums[i]]){
            frequency[nums[i]] += 1
        } else {
            frequency[nums[i]] = 1
        }
    } 
    // console.log(frequency) 
    let freqArr = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
    // console.log(freqArr)
    return freqArr.slice(0, k)
};

console.log(topKFrequent([1,1,1,2, 2, 3], 2))
console.log(topKFrequent([4,1,-1, 2, -1, 2, 3], 2))