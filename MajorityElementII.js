const majorityElement = (nums) => {
count = {}
for(let i = 0; i < nums.length; i++){
    if(count[nums[i]]){
        count[nums[i]] += 1 
    } else {
        count[nums[i]] = 1
    }
}
matches = []
for(let i = 0; i < nums.length; i++){
if(count[nums[i]] > (nums.length/3)){
    if(matches.includes(nums[i]) === false){
        matches.push(nums[i])
    }
}
}
return matches
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([1,1,1,3,3,2,2,2]))