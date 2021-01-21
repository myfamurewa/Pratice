function validParentheses(braces: string): boolean{
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
    for (let i = 0; i < braces.length; i++) {
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