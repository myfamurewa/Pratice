function validBraces(braces){
    let stack = []
    let pairs = {
          '(': ')',
          '[': ']',
          '{': '}'
    }
    for(let i in braces){
      if(braces[i] === "(" || braces[i] === "[" || braces[i] === "{"){
        stack.push(braces[i])
      } else {
              let last = stack.pop();
              if (braces[i] !== pairs[last]) {return false};
          }
    }
    return stack.length === 0? true : false
  }