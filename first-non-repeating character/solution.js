function firstNonRepeatingLetter(s) {
    if(s.length < 2){
      return s
    }
    let count = {}
    let id = 0
    for(let i = 0; i < s.length; i++){
      if(count[s[i].toLowerCase()]){
        count[s[i]].value += 1
      } else {
        s[i].toLowerCase() === s[i] ? count[s[i]] = {id: id, value: 1, uppercase: false} : count[s[i].toLowerCase()] = {id: id, value: 1, uppercase: true}
        id++
      }
    }
    let result = Object.entries(count).filter(count => count[1].value === 1).sort((a, b) => a - b)
    console.log("s", s, "result", result)
    return result.length? result[0][0].uppercase === true ? result[0][0].toUpperCase(): result[0][0] : ""
  }