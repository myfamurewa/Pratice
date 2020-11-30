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