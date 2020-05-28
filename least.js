// function fewestHops(arr, k) {
//   let count = [];
//   let steps = 0;

//   for (let index in arr) {
//     value = arr[index];

//     while (value < k) {
//       value = value + steps === index ? 0 : arr[steps];
//       steps++;
//       if (value === k) {
//         count.push(steps);
//         steps = 0;
//       }
//     }
//   }

//   return Math.min(...count);
// }

// console.log(fewestHops(test1, 5))

const leastHops = (arr, k) => {
  let minSteps = arr.length;
  let value = 0;
  let steps = 0;
  if (arr.includes(k)) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
    
      value += arr[i];
   
      if (value > k) {
        value = arr[i];
        steps = 0;
        
      }
      if (value === k && steps < minSteps) {
        minSteps = steps;
      }
      steps++;
    }
    return minSteps === arr.length ? false : minSteps
  }
};

const test1 = [1, 2, 3, 4, 6, 5, 3, 2, 1, 7, 8];
const test2 = [8, 6, 4, 3, 2, 6, 7, 2, 3, 1, 5];
console.log(leastHops(test1, 5));
console.log(leastHops(test2, 8));
// console.log(leastHops(test2, 12));
// console.log(leastHops(test2, 23))
// console.log(leastHops(test2, 0))
//O(N)
//O(N)^2