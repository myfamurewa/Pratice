/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let cache = {};
  for (let str of strs) {
    let sortedKey = str.split("").sort().join("");
    !cache[sortedKey] ? (cache[sortedKey] = [str]) : cache[sortedKey].push(str);
  }
  return Object.values(cache);
};

const groupAnagramsV2 = function (strs) {
  let dictionary = {};
  for (let str of strs) {
    let wordVal = str.split("").reduce((acc, cv) => {
      acc + cv.charCodeAt(0);
    })
    !dictionary[wordVal]
      ? (dictionary[wordVal] = [str])
      : dictionary[wordVal].push(str);
  }
  return Object.values(dictionary);
};
