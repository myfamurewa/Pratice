function lengthOfLongestSubstring(s: string): number {
    let seen = new Set()
    let substringCount = 0
    let maxCount = 0
    for(let letter = 0; letter < s.length; letter++){
        if(seen.has(s[letter])){
            substringCount = 0
        } else {
            substringCount += 1
            seen.add(s[letter])
        }
        maxCount = Math.max(maxCount, substringCount);
    }
    return maxCount
};
function lengthOfLongestSubstringII(s: string): number {
var sLen = s.length,
    maxLen = 0,
    maxStr = '',
    tmpStr,
    posIndex,
    i;

  for( i = 0 ; i < sLen; i++ ){

    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);

    if(posIndex > -1){
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += tmpStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
}