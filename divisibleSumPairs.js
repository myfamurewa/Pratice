function naiveDivisibleSumPairs (n, k, ar){
    let count = 0
    for(let i = 0 ; i < n; i++){
       let review = ar.slice(i + 1, ar.length) 
       for(let j = i; j < review.length; j++){
           if(ar[i] + review[j] % k === 0){
               count++
           }
       }
    }
    return count
}


const test1 = [1, 3, 2, 6, 1, 2]

console.log(naiveDivisibleSumPairs(6, 0, test1))

function improvedDivisibleSumPairs(k, nums) {
    let counter = 0;
    var elem = nums.shift();

    for (var i = 0; i<nums.length ; i++) {
        if ((elem+nums[i])%k == 0) {
            counter++;
        }   
    }
    if (nums.length==0) {
        return counter;
    } else {
        return counter + improvedDivisibleSumPairs(k, nums);
    }
}

console.log(improvedDivisibleSumPairs(4, test1))

function finalDivisibleSumPairs(n, k, ar){
    let result = 0
    for(let i=0; i<n; i++){
        result+= ar.slice(i+1, n).map(res => res + ar[i]).filter(res => res%k == 0).length
    }
    return result
}

//the way that the tests are set up on hackerRank is strange and inconsistent only the final solution works