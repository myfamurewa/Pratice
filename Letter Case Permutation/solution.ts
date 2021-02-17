function letterCasePermutation(S: string): string[] {
    let permutations = []
    function isNumber(num: string){
        return /^\d+$/.test(num);
    }
    for(let i = 0; i < S.length; i++){
        console.log(isNumber(S[i]))
        if(isNumber(S[i]) === true){
            continue
        }
        let permutation = S.substring(0, i) + `${S[i].toUpperCase() === S[i]? S[i].toLowerCase() : S[i].toUpperCase()}` + S.substring(i + 1)
        permutations.push(permutation)
    }
    let upperCaseString = ""
    let lowerCaseString = ""
    for(let i = 0; i < S.length; i++){
        if(isNumber(S[i]) === true){
            upperCaseString += S[i]
            lowerCaseString += S[i]
        } else {
            upperCaseString += S[i].toUpperCase()
            lowerCaseString += S[i].toLowerCase()
        }
    }
    permutations.push(upperCaseString)
    permutations.push(lowerCaseString)
    return permutations
};

let test1 = "a1b2"

function letterCasePermutationII(S: string): string[] {
    let n = S.length;
    let res = []
    let char = /[a-zA-Z]/
    let arr = []
    
    function backtrack(i){
        if(i == n){
            res.push(arr.join(''))
            return
        }
        
        if(char.test(S[i])){
            arr[i] = S[i].toLowerCase()
            backtrack(i+1)
            arr[i] = S[i].toUpperCase()
            backtrack(i+1)
        } else {
            arr[i] = S[i]
            backtrack(i+1)
        }
    }
    
    backtrack(0)
    return res
}
console.log(letterCasePermutation(test1))


