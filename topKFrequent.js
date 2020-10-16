var topKFrequent = function(nums, k) {
    // create a dictionary to find the frequency of each number
    let frequency = {}
    // loop through the array and increment or add the numbers to the dictionary
    for(let i = 0; i < nums.length; i++){
        if(frequency[nums[i]]){
            frequency[nums[i]] += 1
        } else {
            frequency[nums[i]] = 1
        }
    } 
    // create an array of all the frequencies sorted in descending order
    let freqArr = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
    // slice the array at the kth element
    return freqArr.slice(0, k)
};

console.log(topKFrequent([1,1,1,2, 2, 3], 2))
console.log(topKFrequent([4,1,-1, 2, -1, 2, 3], 2))