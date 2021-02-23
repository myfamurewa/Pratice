

function combinationSum4(nums: number[], target: number): number {
    if(!nums){
        return 0
    }
    if(target == 0){
        return 0
    }
    nums = nums.sort((a, b)=> b - a)
    let cache = {}
    function recursiveCombinationFinder(target: number): number {
        if(cache[target]){
            return cache[target]
        }
        let combinations = 0;
        for(let num of nums){
            if(num == target){
                combinations++
            }
            if(num < target){
                combinations += recursiveCombinationFinder(target - num)
            }
        }
        cache[target] = combinations
        return combinations
    }
    return recursiveCombinationFinder(target)
}