function pivotIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums.slice(0, i).reduce((acc,cur) => acc+cur, 0)
            === nums.slice(i+1).reduce((acc,cur) => acc+cur, 0))
            return i;
    }
    return -1;
}

function pivotIndexI(nums: number[]): number {
    let lSum = nums.slice();
    let rSum = nums.slice();
    for (let i = 1; i < lSum.length; i++) lSum[i] += lSum[i-1];
    for (let i = rSum.length-2; i >= 0; i--) rSum[i] += rSum[i+1];
    for (let i = 0; i < lSum.length; i++) {
        if (lSum[i] === rSum[i]) return i;
    }
    return -1;
}