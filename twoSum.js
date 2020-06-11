var twoSum = function(nums, target) {
    let twoSum = []
    for(let i = 0; i < nums.length; i++){
        if(nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== i && twoSum.length < 2){
             twoSum.push(i, nums.indexOf(target - nums[i]))
        } 
    }
    return twoSum
};
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== i && twoSum.length < 2){
//              return [i, nums.indexOf(target - nums[i])]
//         } 
//     }
//     return twoSum
// };

let arr = [3,2,4]

console.log(twoSum(arr, 6))
