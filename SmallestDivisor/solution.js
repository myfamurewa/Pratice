var smallestDivisor = function(nums, threshold) {
    let result = null
    let i = 1
    const badRounding = (number) => {
        if(number !== Math.floor(number)){
         number = Math.floor(number + 1)
        }
        return number
    }
    while(!result){
        divided = nums.reduce((acc, cv) => {
        return  acc + badRounding(cv/i)
        }, 0)
        if (divided <= threshold){
            result = i
        }
        i++
    }
    return result
};
test1 = smallestDivisor([1,2,5,9], 6)
test2 = smallestDivisor([2,3,5,7,11], 11)
console.log(test1)
console.log(test2)

function computeSum(i) {
    let sum = 0;
    for (const num of nums) {
        sum+= Math.ceil(num / i);
    }
    return sum
}
let lo = 1
let hi = 2

while (computeSum(hi) > threshold) {
    lo = hi;
    hi = hi * 2;
}
// now the lo and high are range of the answer
while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    const sum = computeSum(mid)
    
    if (sum > threshold) {
        lo = mid + 1
    } else {
        hi = mid -1
    }
}

var smallestDivisor = function (nums, threshold) {
    let l = 1, r = Math.max(...nums);

    const passed = (d) => {
        const sum = nums
            .map(n => Math.ceil(n / m))
            .reduce((p, v) => p += v, 0);
        return sum <= threshold;
    }

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (passed(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};