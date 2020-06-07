function balancedParentheses(string) {
  let openings = [];
  let brackets = "[]{}()<>";
  for (let i = 0; i < string.length; i++) {
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
console.log(balancedParentheses('('));  // false
console.log(balancedParentheses('()')); // true
console.log(balancedParentheses(')('));  // false <-- bad
console.log(balancedParentheses('(())'));  // true <-- bad
console.log(balancedParentheses(' const obj  = { x: someFunction() }')); // true
console.log(balancedParentheses('[](){}')); // true
console.log(balancedParentheses('[(]{)}')); // false