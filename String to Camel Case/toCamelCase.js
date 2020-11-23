function toCamelCase(str){
    if(str.length === 0 || str.length === undefined){
        return str
    }
    let strArr
    if(str.includes("-")) {
        strArr = str.split("-")
    } else {
        strArr = str.split("_")
    }
    strArr = strArr.map((word, index) => {
        if(index === 0){
            return word
        }
        let removedLetter = word[0]
        let changedWord = word.substring(1)
        word = `${removedLetter.toUpperCase()}${changedWord}`
        return word
    })
    return strArr.join("")
}
test1 = "the-stealth-warrior"
test2 = "The_stealth_warrior"

console.log(toCamelCase(test1))