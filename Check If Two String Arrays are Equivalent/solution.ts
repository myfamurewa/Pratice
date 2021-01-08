function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let string1 = ""
    for(let i = 0; i < word1.length; i++){
        string1 += word1[i]
    }
    let string2 = ""
    for(let j = 0; j < word2.length; j++){
        string2 += word2[j]
    }
    return string1 === string2
};