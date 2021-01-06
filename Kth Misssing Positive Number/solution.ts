function findKthPositive(arr: number[], k: number): number {
    for ( let i = 1, j = 0; ;i++){
        if(i === arr[j]){
            j++
        } else if (k === i - j){
            return i
        }
    }
}

function findKthPositive(arr: number[], k: number): number {
    let numberMissing = 0
    let currentNumber = 1
    for(let i = 0; i < arr.length; i++){
        if(numberMissing === k){
            return currentNumber
        }
        if(arr[i] === currentNumber){
            currentNumber += 1
        }else if (arr[i] - currentNumber > 1){
            while(currentNumber < arr[i]){
                numberMissing += 1
                currentNumber += 1
                 if(numberMissing === k){
                    return currentNumber
                }
            }

        }else {
            numberMissing += 1
            currentNumber += 1
        }
    }
    while(numberMissing < k){
        numberMissing += 1
        currentNumber += 1
    }
    return currentNumber

};

const test1 = [2,3,4,7,11]
const test22 = [1,2,3,4]

console.log(findKthPositive(test1, 5))
console.log(findKthPositive(test22, 2))
console.log(findKthPositive(test22, 1))
