// function longestConsec(strarr, k) {
//     if(k > strarr.length || strarr.length === 0 || k <= 0) return ""
//     if(k === 1) return strarr.sort(function (a, b) { return b.length - a.length; })[0];
//     let longestConsec = 0;
//     let longeststr = ""
//     let currentLength = 0;
//     let string = ""
//     let words = 1;
//     for(let i = 0; i < strarr.length; i++){ 
//          currentLength += strarr[i].length
//          string += strarr[i]
//   //        console.log("currentLength", currentLength, "string", string, "k", k, "words", words)
//   //        console.log("the current string", strarr[i])
        
//          if (currentLength > longestConsec && words <= k){
//            longestConsec = currentLength
//            longeststr = string 
//   //          console.log("this is the longest string", longeststr)
//          }
         
//           if(words >= k) {
//            string = strarr[i]
//            currentLength = strarr[i].length
//            words = 1
//   //          console.log("current string inside the reset clause", strarr[i])
//   //          console.log("resetting here")
//          }
         
//          words++
//      }
//      return longeststr
//   }
  // simplifiying
  function longestConsec(strarr, k) {
    if(k > strarr.length || strarr.length === 0 || k <= 0) return ""
    if(k === 1) return strarr.sort(function (a, b) { return b.length - a.length; })[0];
    let longeststr = ""

    let string = ""
    let words = 1;
    for(let i = 0; i < strarr.length; i++){ 
         string = string + strarr[i]
        
         if (string.length > longeststr.length && words <= k){
           longeststr = string 
         }
         
          if(words >= k) {
           string = strarr[i]
           words = 1
         }
         
         words++
     }
     return longeststr
  }

  // solution

  function longestConsecV2(strArr, k) {
    var n = strArr.length;
   longestStr = "";
   str = ''
 
   if (n === 0 || k > n || k <= 0) {
     return "";
   }
 
   for (var i= 0; i < n; i++) {
     var currentString = strArr.slice(i, k+i).join('');
     if (currentString.length > str.length) {
       str = currentString;
     }
   }
   return str;
  
   }