/*
Understand
given a list of songs where the ith song has a duration of time[i] seconds.
return the number of pairs of songs for which their total duration in seconds is divisible by 60.
specifically the number of where the values of the indexes to the right plus the current index are divisible by 60

Plan
the most obviously apparent solution to this problem ins one that uses nexted for loops
you have an outer loop that changes the incrementing number and an inner loop that goes
through all the numbers after it when you hit a number that is divisible by 60 you increment a counter
this solution would have O(n^2) time complexity and O(1) space complexity

*/

function numPairsDivisibleby60(time: number[]): number {
    if(time.length < 2){
        return 0
    }
    let returnVal = 0
    for(let i = 0; i < time.length; i++){
        for(let j = i + 1; j < time.length; j++){
            if((time[i] + time[j]) % 60 === 0){
                returnVal += 1
            }
        }
    }
    return returnVal
}

const numPairsDivisibleBy60ALT = (time: number[]): number => {
    const appearDic = {};
    let ans = 0;
    time.forEach(el => {
        const mod = el % 60;
        const left = (60 - mod) % 60;
        ans += appearDic[left] ? appearDic[left] : 0;
        appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
    });
    return ans;
};