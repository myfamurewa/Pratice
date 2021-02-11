function isAnagram(s: string, t: string): boolean {
    // let sSum = s.split("").map(char => char.charCodeAt(0)).reduce((a, b) => {
    //     return a + b
    // }, 0)
    // let tSum = t.split("").map(char => char.charCodeAt(0)).reduce((a, b) => {
    //     return a + b
    // }, 0)
    if(t.length !== s.length){
        return false
    }
    let sArr = s.split("").sort()
    let tArr = t.split("").sort()
    return tArr.join("") === sArr.join("")
};