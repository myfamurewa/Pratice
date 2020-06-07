function balancedParentheses(string) {
  let openings = [];
  let brackets = "[]{}()<>";
  console.log(brackets.charAt(0))
  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === brackets.charAt(0) ||
      string.charAt(i) === brackets.charAt(2) ||
      string.charAt(i) === brackets.charAt(4) ||
      string.charAt(i) === brackets.charAt(6)
    ) {
      openings.push(string.charAt(i));
    } else {
      if (openings.length === 0) {
        return false;
      }
    }
    if (
      (string.charAt(i) === brackets.charAt(1) &&
        openings[openings.length - 1] != brackets.charAt(0)) ||
      (string.charAt(i) === brackets.charAt(3) &&
        openings[openings.length - 1] != brackets.charAt(2)) ||
      (string.charAt(i) === brackets.charAt(5) &&
        openings[openings.length - 1] != brackets.charAt(4)) ||
      (string.charAt(i) === brackets.charAt(7) &&
        openings[openings.length - 1] != brackets.charAt(6))
    ) {
        return false;
    }
    openings.pop()
  }
  console.log("this is openings",openings)
  return openings.length === 0 
}


let isBalanced = (input) => {

    let brackets = "[]{}()<>"
    let stack = []
  
    for(let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket)
      console.log(`The current element is ${bracket}, which has an index in input of ${input.indexOf(bracket)}, and matches the bracket with index ${bracketsIndex} in brackets`)
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
        console.log(`this is an opening bracket. The address of its matching closing bracket in brackets is ${bracketsIndex + 1}. Adding that index to the stack makes the stack ${stack}`)
      } else {
        console.log(`this is a closing bracket, so ${stack.pop()} is being popped off the stack`)
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }
  let brackets = "[]{}()<>"
  console.log(isBalanced(brackets)); // true
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