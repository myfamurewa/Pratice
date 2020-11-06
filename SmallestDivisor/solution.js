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