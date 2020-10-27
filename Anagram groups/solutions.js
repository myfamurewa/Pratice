/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let cache = {};
    for(let str of strs){
        let sortedKey = str.split('').sort().join('');
        (!cache[sortedKey]) ? cache[sortedKey] = [str] : cache[sortedKey].push(str)   
    }
    return Object.values(cache)
};