function decodeAtIndex(S: string, K: number): string {
    let decoded = ""
    for(let i = 0; i < S.length; i++) {
        if (isNumeric(S[i]) === true){
            decoded = decoded.repeat(Number(S[i]))
        } else {
            decoded += S[i]
        }
    }
    return decoded[K]
};
function isNumeric(num: any): boolean{
    return !isNaN(num)
  }
console.log(decodeAtIndex("leet2code3", 10))