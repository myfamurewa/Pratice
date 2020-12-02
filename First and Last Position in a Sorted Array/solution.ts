function searchRange(nums: number[], target: number): number[] {
    let firstIndex = nums.indexOf(target)
    let lastIndex = nums.lastIndexOf(target)
    if(firstIndex === -1){
        return [-1, -1]
    }
    if( firstIndex === lastIndex ){
        return [0, 0]
    }
    return [firstIndex, lastIndex]
};

function searchRangeAlt(nums: number[], target: number): number[] {
    let ret = [-1, -1]
    for (let i = 0; i < nums.length; i ++){
        if(nums[i] === target){
            ret[1] = i
            if(ret[0] === -1){
                ret[0] = i
            }
        }
    }
    return ret
}