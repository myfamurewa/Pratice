function pigIt(str){
    let pig = str.split(" ").map(word => {
    if(word === "!" || word === "?"){
      return word
    }
      let removedLetter = word[0]
      let changedWord = word.substring(1)
      word = `${changedWord}${removedLetter}ay`
      return word
    })
    return pig.join(" ")
 }
 // veni vidi vici