function strStr(haystack: string, needle: string): number {
    if(haystack.length === 0 || !haystack.length){
        return 0
    }
    if(haystack.includes(needle)){
        return haystack.indexOf(needle[0])
    } else {
        return -1
    }
};

var strStrALT = function(haystack, needle) {
    if(!needle) {
      return 0;
    }
    let haystackArr = haystack.split("");
    const first = needle[0];
    let buffer = 0;

    while(haystackArr.indexOf(first) !== -1) {
      if (haystackArr.length < needle.length) {
        break;
      }
      const index = haystackArr.indexOf(first);
      const str = haystack.substring(index, index + needle.length);
      if (str === needle) {
        return index + buffer;
      } else {
        haystackArr = haystackArr.splice(index + 1);
        haystack = haystack.substring(index + 1);
        buffer += index + 1;
      }
    }
   