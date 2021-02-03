function longestWord(words: string[]): string {
    // sort the list of words
    let sortedWords = words.sort()
   // loop through our list
    let lastWord = sortedWords[0]
    let finalWords = []
    for(let i = 1; i < sortedWords.length; i++){
       if(sortedWords[i].substring(0, sortedWords[i].length - 1) === lastWord){
           lastWord = sortedWords[i]
       } else {
           finalWords.push(lastWord)
           lastWord = sortedWords[i]
       }
    }
    if(finalWords.length === 0){
        return lastWord
    } else {
        if(sortedWords[sortedWords.length - 2])
        finalWords.push(lastWord)
    }
    let maxWordLength = finalWords.sort(function (a, b) {
        return b.length - a.length;
    }
)[0].length
    finalWords = finalWords.filter((word) => word.length === maxWordLength)
    return finalWords[0]
};

let test1 = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
let test2 = ["w","wo","wor","worl", "world"]
let test3 = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]
let test4 = ["m","ma","mat","math","s","sc","sci","scie","scien","scienc","science","a","ar","art"]


console.log(longestWord(test1))
console.log(longestWord(test2))
console.log(longestWord(test3))
console.log(longestWord(test4))