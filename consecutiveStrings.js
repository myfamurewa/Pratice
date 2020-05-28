function longestConsec(strarr, k) {
    if(k > strarr.length || strarr.length === 0 || k <= 0) return ""
    if(k === 1) return strarr.sort(function (a, b) { return b.length - a.length; })[0];
    let longestConsec = 0;
    let longestStr = ""
    let currentLength = 0;
    let string = ""
    let words = 1;
    for(let i = 0; i < strarr.length; i++){ 
         currentLength += strarr[i].length
         string += strarr[i]
  //        console.log("currentLength", currentLength, "string", string, "k", k, "words", words)
  //        console.log("the current string", strarr[i])
        
         if (currentLength > longestConsec && words <= k){
           longestConsec = currentLength
           longestStr = string 
  //          console.log("this is the longest string", longestStr)
         }
         
          if(words >= k) {
           string = strarr[i]
           currentLength = strarr[i].length
           words = 1
  //          console.log("current string inside the reset clause", strarr[i])
  //          console.log("resetting here")
         }
         
         words++
     }
     return longestStr
  }