const repeatedSubstringPattern = function(s){
    for(let i = 0; i < s.length; i++){
        substr = s.substring(0, i)
        // console.log("current substring", substr)
        // console.log("compared subsection", s.substring(i, i + substr.length + 1))
        if (substr === s.substring(i) || substr === s.substring(i, i + substr.length + 1) && substr === s.substring(i + substr.length + 1, i + (substr.length + 1) * 2)){
            return true
        }
    }
    return false
}

// console.log(repeatedSubstringPattern("abab"))
// console.log(repeatedSubstringPattern("ababab"))
console.log(repeatedSubstringPattern("substring"))
// console.log(repeatedSubstringPattern("abcabcabcabc"))

const repeatedSubstringPatternV2 = function(s){
    let len = s.length
    let repeats;
     for(let i = s.length/2; i >=1; i--){
        if(len % i === 0){
            repeats = len / i;
            substring = s.substring(0, i) 
        }
        if(substring.repeat(repeats) === s){
            return true
        }
     }
     return false
}

console.log(repeatedSubstringPatternV2("substring"))
console.log(repeatedSubstringPatternV2("abab"))
console.log(repeatedSubstringPatternV2("ababab"))


const repeatedSubstringPatternV3 = function(s){
    let newStr = (s + s).substring(1, s.length * 2 - 1)
    return newStr.indexOf(s) !== -1
}

console.log(repeatedSubstringPatternV3("substring"))
console.log(repeatedSubstringPatternV3("abab"))
console.log(repeatedSubstringPatternV3("ababab"))