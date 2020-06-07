function balancedParentheses(string) {
  let openings = [];
  let brackets = "[]{}()<>";
  console.log(brackets[0])
  for (let i = 0; i < string.length; i++) {
    console.log(string[i], "current character")
    if (
      string[i] === brackets[0] ||
      string[i] === brackets[2] ||
      string[i] === brackets[4] ||
      string[i] === brackets[6]
    ) {
      openings.push(string[i]);
    } else {
      if (openings.length === 0) {
        return false;
      }
    }
    if (
      (string[i] === brackets[1] &&
        openings[openings.length - 1] != brackets[0]) ||
      (string[i] === brackets[3] &&
        openings[openings.length - 1] != brackets[2]) ||
      (string[i] === brackets[5] &&
        openings[openings.length - 1] != brackets[4]) ||
      (string[i] === brackets[7] &&
        openings[openings.length - 1] != brackets[6])
    ) {
        return false;
    }
    openings.pop()
  }
  return openings.length === 0 ? true : false;
}

// the intuitive approach to a balanced bracket
/*  look at the opening brackets an look for a closing bracket
each time you find a new open parenthesis you put that at the top of the pile
then we look for  */
// console.log(balancedParentheses('('));  // false
// console.log(balancedParentheses('()')); // true
// console.log(balancedParentheses(')('));  // false <-- bad
// console.log(balancedParentheses('(())'));  // true <-- bad
// console.log(balancedParentheses(' const obj  = { x: someFunction() }')); // true
console.log(balancedParentheses('[](){}')); // true
// console.log(balancedParentheses('[(]{)}')); // false


// function balancedBrackets(str) {
//     let workStr = str;
//     // ✓ filter out all chars besides brackets, parens, curlies
//     // ✓ count number of characters in the array
//     // ✓ look through string, find first instance of opening bracket
//     // ✓ find closing bracket of any open brackets
//     // ✓ take the  index of the first open bracket
//     // ✓ find the index of the same closing bracket
//     // ✓ subtract the index of the closing bracket from the opening bracket
//     // ✓ difference should be odd to be balanced
//     // Alex has a way to use this regex in our filter method
//     let regex = /[\[\]\{\}\(\)]/g;
//     let filteredStr = workStr.match(regex).join("");
//     if(filteredStr.length % 2 !== 0){
//       return false;
//     } else {
//       return pairCheck(filteredStr);
//     }
//     function pairCheck (input) {
//       let inputArr = input.split("");
//       for(let i of input){
//         if(i=="["){
//           if((input.match(/]/g) || []).length > 1){
//             if((input.lastIndexOf("]") - input.indexOf("[")) % 2 === 0){
//               return false;
//             }
//           }
//           if((input.indexOf("]") - input.indexOf("[")) % 2 === 0 && (input.indexOf("]") - input.indexOf("[")) > 0){
//             return false;
//           }
//         }else if(i=="{"){
//           if((input.match(/}/g) || []).length > 1){
//             if((input.lastIndexOf("}") - input.indexOf("{")) % 2 === 0){
//               return false;
//             }
//           }
//           if((input.indexOf("}") - input.indexOf("{")) % 2 === 0  && (input.indexOf("}") - input.indexOf("{")) > 0) {
//             return false;
//           }
//         }else if(i=="("){
//           let parenRegex = /[/)]/g;
//           if((input.match(parenRegex) || []).length > 1){
//             if((input.lastIndexOf(")") - input.indexOf("(")) % 2 === 0){
//               return false;
//             }
//           }
//           if((input.indexOf(")") - input.indexOf("(")) % 2 === 0  && (input.indexOf(")") - input.indexOf("(")) > 0) {
//             return false;
//           }
//         }
//       }
//       return true;
//     }
//   }
//   console.log(balancedBrackets('('));  // false
//   console.log(balancedBrackets('()')); // true
//   console.log(balancedBrackets(')('));  // false <-- bad
//   console.log(balancedBrackets('(())'));  // true <-- bad
//   console.log(balancedBrackets(' const obj  = { x: someFunction() }')); // true
//   console.log(balancedBrackets('[](){}')); // true
//   console.log(balancedBrackets('[(]{)}')); // false