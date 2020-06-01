
function encode(string) {
  let library = {
  "a" : 1,
  "e" : 2,
  "i" : 3,
  "o" : 4,
  "u" : 5,
}
  let stringarr = string.split("")
  for(let i = 0; i < stringarr.length; i++){
    if(library[stringarr[i]]) stringarr[i] = library[stringarr[i]]
  }
//   console.log("this is stringarr", stringarr.join(""), "this is the original string", string)
  return stringarr.join("")
}

function decode(string) {
let library = {
  1 : "a",
  2 : "e",
  3 : "i",
  4 : "o",
  5: "u"  
}
  let stringarr = string.split("")
  for(let i = 0; i < stringarr.length; i++){
    if(library[stringarr[i]]) stringarr[i] = library[stringarr[i]]
  }
  return stringarr.join("")
}


// 6th kyu challenge the vowel code on codewars
// I'm not sure why the indexer doesn't work both ways in this challenge
// based on my understanding of dictionaries the same library should work for both encode and decode
// however I wasn't able to get the test to pass with just the single library
// decode would return undefined wwhen I tried to use a value to find it's key so I had to switch the two around