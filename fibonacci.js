// const fib = (n) => {
//   let sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21];
//   // if(n === 0 || n < 0){ return 0 }
//   // if(n === 1 || n === 2) { return 1 }
//   if (sequence[n]) {
//     return sequence[n];
//   } else {
//     if (sequence[n - 1] && sequence[n - 2]) {
//       sequence.push(sequence[n - 1] + sequence[n - 2]);
//       return sequence[n - 1] + sequence[n - 2];
//     } else {
//      return fib(n - 1);  
//     }
//   }
// };

// console.log(fib(7));
// console.log(fib(12));

function forFib() {
    let a = 0, b = 1, result = b
    for( let i = 1; i < 100; i++ ){
        result = a + b;
        a = b;
        b = result
    }
    return result
}

// function fibIt(num) {
//     const arr = [0, 1]
//     const mapper = {};
//     let counter = 0
//     for(let i = 2; i <= num; i++){
//         let a = arr[i -1]
//         let b = arr[i -2]
//         arr.push(a + b)
//     }

//     for(let elem in arr) {
//         mapper[counter] = arr[elem]
//         counter++
//     }
//     // return arr[num]
//     return mapper
// }

// console.log(fibIt(15));

function fibRec(n) {
    if(n < 2) {
        return n;
    }
    return fibRec(n -1) + fibRec(n -2)
}

console.log(fibRec(30))
