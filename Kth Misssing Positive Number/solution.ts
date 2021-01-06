function findKthPositive(arr: number[], k: number): number {
    for ( let i = 1, j = 0; ;i++){
        if(i === arr[j]){
            j++
        } else if (k === i - j){
            return i
        }
    }
}

function findKthPositiveBinary(arr: number[], k: number): number {

}

function findKthPositiveMyWayImproved(arr: number[], k: number): number {
    let numberMissing = 0
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            numberMissing += arr[0] - 1;
            if(numberMissing >= k) {
                return k
            }
        } else {
            numberMissing += arr[i] - arr[i - 1] - 1;
            if(numberMissing >= k){
                numberMissing -= arr[i] - arr[i - 1] - 1;
                let result = arr[i - 1]
                while(numberMissing++ < k){
                    result++
                }
                return result
            }
        }
    }
    let result = arr[arr.length - 1]
    while(numberMissing++ < k){
        result++
    }
    return result
};

const test1 = [2,3,4,7,11]
const test22 = [1,2,3,4]

console.log(findKthPositive(test1, 5))
console.log(findKthPositive(test22, 2))
console.log(findKthPositive(test22, 1))
