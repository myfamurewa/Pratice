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

var reverseStringMoreEfficient = function(s: string[]): void {
    for (let i=0; i<s.length/2; i++)
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
};

// function reverseStringBase (s: string): void {
//     let length = s.length
//     for(let i =0; i < s.length/2; i++)
//     [s[i], s[length - 1]] = [s[length - 1], s[i]]
// }

let test1 = ["o", "r", "a", "n", "g", "e"]
let test2 = "calculator".split("")
reverseString(test1)
console.log(test1)
reverseString(test2)
console.log(test2)