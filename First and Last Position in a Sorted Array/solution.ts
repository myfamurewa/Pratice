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