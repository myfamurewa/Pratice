function stickCutter(arr) {
    console.log(arr.length)
    do{
        arr.sort((a, b) => { return a - b})
        arr.forEach(number => {
            console.log("this is the number after subtracting the smallest number", number, "This is the smallest number", Math.min(...arr))
            number = number - Math.min(...arr)
            console.log("this is the number after subtracting the smallest number", number, "This is the smallest number", Math.min(...arr))
            return number
        })
        arr = arr.filter(number => number > 0)
        console.log("arr.length should have changed")
        console.log(arr.length)
    }while(arr.length > 1)
    if(arr.length === 1){
        console.log('DONE')
        return 'DONE'
    }
}

const arr1 = [1, 2, 3, 4, 3, 3, 2, 1]
const arr2 = [5, 4, 4, 2, 2, 8]
const arr3 = [7, 6, 3, 8, 9, 10, 1, 5]


// stickCutter(arr1)

// const cutTheStick = (arr) => {

//     if(arr.length > 0){
        
//     }
    
// }

function cut(arr) {
    arr.sort((a, b) => { return a - b})
    if (!arr.length) return;
    console.log(arr.length);
    cut(arr.map(x => x - arr[0]).filter(x => x > 0)); // <-- the essence of the algorithm
  }

  console.log(cut(arr1))