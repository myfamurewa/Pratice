let cache = ["1", "1", "11", "21", "1211" , 
"111221"]
function countAndSay(n: number): string {
   if(cache[n]){
       return cache[n]
   } else {
       if(cache[n - 1]){
           let count = {}
           for(let i = 0; i < cache[n - 1].length; i++){
               if(count[cache[n - 1][i]]){
                   count[cache[n - 1][i]] += 1
               } else {
                   count[cache[n - 1][i]] = 1
               }
           }
           let values = Object.entries(count)
           let returnStr = ""
           for(let j = 0; j < values.length; j++){
               returnStr += `${values[j][1]}${values[j][0]}`
           }
           cache.push(returnStr)
           return returnStr
       } else {
           let prev = countAndSay(n - 1)
            let count = {}
           for(let i = 0; i < prev.length; i++){
               if(count[prev[i]]){
                   count[prev[i]] += 1
               } else {
                   count[prev[i]] = 1
               }
           }
           let values = Object.entries(count)
           let returnStr = ""
           for(let j = 0; j < values.length; j++){
               returnStr += `${values[j][1]}${values[j][0]}`
           }
           cache.push(returnStr)
           return returnStr
       }
   } 
};

console.log(countAndSay(5))

function countAndSayV2(n: number, prevSeq: any): string {
   
    if (n === 1) return prevSeq;

    let nextSeq = '';
    let prevDigit = prevSeq[0];
    let digitCount = 0;

    for (const digit of prevSeq) {
        if (digit === prevDigit) {
            digitCount++;
        } else {
            nextSeq += digitCount + prevDigit;
            prevDigit = digit;
            digitCount = 1;
        }
    }
    
    return countAndSay(n-1, nextSeq + digitCount + prevDigit)
}

function countAndSayV3(n: number): string {
    return n === 1 ? '1' : countAndSay(n - 1).match(/(.)\1*/g).map(match => match.length + match[0]).join('');
}
