function spinWords(string){
    //TODO Have fun :)
    let wordArr = string.split(" ")
    let reversal = wordArr.map(word =>{ 
    if(word.length >= 5){
     return word.split("").reverse().join("")
    } else {
    return word
    }
    }) 
    return reversal.join(" ")
  }