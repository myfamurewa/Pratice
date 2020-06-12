// function sum(num) {
//     function nextPrime(value) {
//     if (value > 2) {
//         let i, q;
//         do {
//             i = 3;
//             value += 2;
//             q = Math.floor(Math.sqrt(value));
//             while (i <= q && value % i) {
//                 i += 2;
//             }
//         } while (i <= q);
//         return value;
//     }
//     return value === 2 ? 3 : 2;
// }


// function generatePrime() {
//   let userValue = num
// 	let value = 0, result = [];
// 	for (let i = 0; i < userValue; i++) {
// 		value = nextPrime(value);
// 		result.push(value);
// 	}
//   return result[num - 1]
// }
  
//    if(num === 0 || num === 1) { return 1}
//    else return generatePrime(num - 2)
// }


function sum(num) {
    return find(num, num);
    function find(n, m){
      let number = [];
      if (m === 0){return 0}
      if (n === 0){return 1}
      if(n < 0) {return 0};
      if(number[n] == undefined) number[n] = [];
      let result = number[n][m];
      if(typeof result != 'number') {
        result = find(n-m, m) + find(n, m-1);
        number[n][m] = result
      };
      return result
    }    
}