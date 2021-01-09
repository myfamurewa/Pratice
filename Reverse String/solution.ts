function reverseStringBuiltIn(s: string[]): void {
    s = s.reverse()
};


function reverseString(s: string[]): void {
    let right = 0
    let left = s.length - 1
    while(right < left){
        let currentRight = s[right]
        let currentLeft = s[left]
        s[right] = currentLeft
        s[left] = currentRight
        left--
        right++
    }
};

let test1 = ["o", "r", "a", "n", "g", "e"]
let test2 = "calculator".split("")
reverseString(test1)
console.log(test1)
reverseString(test2)
console.log(test2)