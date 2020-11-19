function smaller(nums) {
    let results = []
    for(let i = 0; i < nums.length; i++){
        let smaller = 0
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[i]){
                smaller++
            }
        }
        results.push(smaller)
    }
    return results
}

const smallerminimized = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);
