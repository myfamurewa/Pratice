function validParentheses(braces){
    //TODO 
    if(!braces){
      return true
    }
    let regex = /[\[\]\{\}\(\)]/g;
    braces = braces.match(regex).join("");
    let stack = [];
    let pairs = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    for (let i in braces) {
      if (braces[i] === "(" || braces[i] === "[" || braces[i] === "{") {
        stack.push(braces[i]);
      } else {
        let last = stack.pop();
        if (braces[i] !== pairs[last]) {
          return false;
        }
      }
    }
    return stack.length === 0 ? true : false;
  }