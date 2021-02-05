function findLHS(nums: number[]): number {
    function isHarmonious(nums: number[]): boolean {
        let max = Math.max(...nums)
        let min = Math.max(...nums)
        if(max - 1 === min){
            return true
        } else {
            return false
        }
    }
    let maxSubstringLength = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; i++){
            let subArr = nums.slice(i, j)
        
            if(isHarmonious(subArr)){
                maxSubstringLength = Math.max(maxSubstringLength, subArr.length)
            }
        }
    }
    return maxSubstringLength
};

let test1 = [1,3,2,2,5,2,3,7]

console.log(findLHS(test1))

function findLHSII(nums: number[]): number {
    const map: Record<string, number> = {}
    let res = 0

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1

        if (map[nums[i] - 1]) res = Math.max(res, map[nums[i]] + map[nums[i]-1])
        if (map[nums[i] + 1]) res = Math.max(res, map[nums[i]] + map[nums[i]+1])
    }

    return res
};