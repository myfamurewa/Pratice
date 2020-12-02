function singleNumber(nums: number[]): number {
    let count = {}
    for(let i = 0; i < nums.length; i++){
        if(count[nums[i]]){
            count[nums[i]] += 1
        } else {
            count[nums[i]] = 1
        }
    }
    let countArr = Object.entries(count)
    return Number(countArr.filter(arr => arr[1] === 1)[0][0])
};