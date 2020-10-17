var findRepeatedDnaSequences = function(s) {
    let sequences = {}
    let repeated = []
    let current;
    let i = 0
    while(i + 10 <= s.length){
        current = s.substring(i, i++ + 10)
        if(sequences[current]){
            sequences[current] += 1
            if(sequences[current] === 2){
                repeated.push(current)
            } else {
                continue
            }
        } else {
            sequences[current] = 1
        }
    }
    return repeated
};

let test1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
let test2 = "AAAAAAAAAAAAA"
console.log(findRepeatedDnaSequences(test1))
console.log(findRepeatedDnaSequences(test2))

var findRepeatedDnaSequencesV2 = function(s) {
    if(s.length <= 10) return []
    const repeated = new Set()
    const seen = new Set()
    let i = 0
    while(i =10 <= s.length){
        const currentsub = s.substring(i, i++ + 10)

        if(seen.has(currentsub)) repeated.add(currentsub)
        else seen.add(currentsub)
    }
    return [...repeated]
}
