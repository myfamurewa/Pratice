// UPER
// Understand 
// Write a function to find the longest common prefix string amongst an array of strings.
//PLAN
// given an array of strings find if the have shared elements
// create a return string
// loop through the array and check if the letters are the same
// if letters in the spot match add the letter to the return string
// break when you run in to letters that don't match
// return the the return string
// Execute
function longestCommonPrefix(strs: string[]): string {
    let returnStr = ""
    let strslength = strs.length
    if(strs.length === 0){
        return ""
    }
    if (strs.length === 1){
        return strs[0]
    }
    for(let i = 0; i < strs[0].length; i++){
        let teststr: string = strs[0].slice(0, i + 1)
        let testoutput = strs.filter(str => str.startsWith(teststr))
        if(testoutput.length === strslength){
            returnStr += teststr[teststr.length - 1]
        } else {
            break
        }
    }
    return returnStr
};