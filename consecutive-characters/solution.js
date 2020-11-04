var maxPower = function(s) {
   let consecutiveletters = 1
   let max = 1
   let prev = s[0] 
   for(let i = 1; i < s.length; i++){
        if(s[i] === prev){
            consecutiveletters++
        } else {
            consecutiveletters = 1
            prev = s[i]
        }
        if( consecutiveletters > max) {
            max = consecutiveletters
        }
   } 
   return max
}

console.log(maxPower("abbcccddddeeeeedcba"))