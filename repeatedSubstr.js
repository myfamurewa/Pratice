const repeatedSubstringPattern = function(s){
    for(let i = 0; i < s.length; i++){
        substr = s.substring(0, i)
        if (substr === s.substring(i) || substr === s.substring(i, s.length - i)){
            return true
        }
    }
    return false
}

console.log(repeatedSubstringPattern("abab"))
console.log(repeatedSubstringPattern("substring"))
console.log(repeatedSubstringPattern("abcabcabcabc"))