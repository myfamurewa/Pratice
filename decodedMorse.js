decodeMorse = function(morseCode){
    //your code here
    console.log(morseCode)
    let morseArr = morseCode.split(" ")
    let decodedArr = morseArr.map(letter => {
      if(MORSE_CODE[letter] === undefined){
        return " "
      } else {
      return MORSE_CODE[letter]
      }
      })
      console.log("decoded array before space correction", decodedArr)
    for(let i = 0; i < decodedArr.length; i++){
      if(decodedArr[i] === " " && decodedArr[i + 1] === " " ){
        decodedArr[i] = " "
        decodedArr.splice(i + 1, 1)
         } else if(decodedArr[i] === " " && !decodedArr[i - 1] || decodedArr[i] === " " && !decodedArr[i + 1] ) {
            decodedArr.splice(i, 1)
         }
      console.log("decoded array after space correction", decodedArr)
    }
   return decodedArr.join("").trim()
  }