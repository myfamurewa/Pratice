// function nextPermutation(nums: number[]): void {
//     let num = nums[nums.length - 1]
//     let digit = 10
//     for(let i = nums.length - 2; i >= 0; i--){
//         num += nums[i] * digit
//         digit *= 10
//     }
//     console.log(num)
// }

let test1 = [1,2,3]
console.log(nextPermutation(test1))

function nextPermutationII(nums: number[]): void {
    const swap = (a, b) => [nums[a],nums[b]] = [nums[b],nums[a]]
    let len = nums.length - 1, i, j
    for (i = len - 1; nums[i] >= nums[i+1];) i--
    for (let k = i+1; len > k; k++, len--) swap(k,len)
    if (~i) {
        for (j = i + 1; nums[i] >= nums[j];) j++
        swap(i,j)
    }
}


function nextPermutationIII(nums: number[]): void {
    let pivotIdx = -1;
    for (let i = nums.length-1; i > 0; i--) {
        if (nums[i-1] < nums[i]) {
            pivotIdx = i-1;
            break;
        }
    }
    if (pivotIdx == -1) { // the array is in descending order
        nums.reverse();
        return;
    }
    for (let i = nums.length-1; i > pivotIdx; i--) {
        if (nums[pivotIdx] < nums[i]) {
            [nums[pivotIdx], nums[i]] = [nums[i], nums[pivotIdx]];
            break;
        }
    }
    // Now, we need to reverse the subarray after our pivotIdx.
    let left = pivotIdx + 1, right = nums.length-1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++, right--;
    }
}