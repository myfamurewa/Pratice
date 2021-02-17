function findDuplicate(nums: number[]): number {
    let count = {}
    let duped = 0
    for(let num of nums){
        if(count[num]){
            count[num] += 1
        } else {
            count[num] = 1
        }
        if(count[num] >= 2){
            duped = num
        }
    }
    return duped
};