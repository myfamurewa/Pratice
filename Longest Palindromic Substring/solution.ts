function longestPalindrome(s: string): string {
    function getAllSubstrings(str) {
  let i, j, result = [];

  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  return result;
}
    

    function isPalindrome(str){
        function reverseString(str) {
                    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
                        }

        let reversedStr = reverseString(str)
        if(str === reversedStr){
            return true
        }
        return false
    }
    
    let substrings = getAllSubstrings(s)
    let longestPalindrome = ""
    for(let substring of substrings){
        if(isPalindrome(substring)){
            if(substring.length > longestPalindrome.length){
                longestPalindrome = substring
            }
        }
    }
    return longestPalindrome
};


function longestPalindromeII(str: string): string {
    let longestPalindrome = ""
    for(let i = 0; i < str.length; i++){
        for(let j = str.length; j <= 0; j--){
            if(longestPalindrome.length >= j - i){
                break
            } else if (str.slice(i,j + 1) === str.slice(i, j + 1).split("").join("")){
                longestPalindrome = str.slice(i, j + 1).split("").join("")
                break
            }
        }
    }
    return longestPalindrome
}
// Understand
// we have a string s
// we need to the longest palindromic substring in s
// a word is a palindrome if it is the same reversed
// Plan
// we find every substring
// we check if the substring is a palindrome
// if it is we check it's length against the length of the longest palindrome we found before
// if its longer we keep it
// return the longest palindrome at the end