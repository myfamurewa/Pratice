function firstNonRepeatingLetter(s) {
    if(s.length < 2){
      return s
    }
    let count = {}
    let id = 0
    for(let i = 0; i < s.length; i++){
      if(count[s[i]]){
        count[s[i]].value += 1
      } else {
        count[s[i]] = {id: id, value: 1}
        id++
      }
    }
    result = Object.entries(count).filter(count => count[1].value === 1)
    return result[0][0]
  }