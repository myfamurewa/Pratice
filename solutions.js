function longestWord(words) {
    // sort the list of words
    var sortedWords = words.sort();
    // loop through our list
    var lastWord = sortedWords[0];
    var finalWords = [];
    for (var i = 1; i < sortedWords.length; i++) {
        if (sortedWords[i].substring(0, sortedWords[i].length - 1) === lastWord) {
            lastWord = sortedWords[i];
        }
        else {
            finalWords.push(lastWord);
            lastWord = sortedWords[i];
        }
    }
    if (finalWords.length === 0) {
        return lastWord;
    }
    else {
        if (sortedWords[sortedWords.length - 2])
            finalWords.push(lastWord);
    }
    var maxWordLength = finalWords.sort(function (a, b) {
        return b.length - a.length;
    })[0].length;
    finalWords = finalWords.filter(function (word) { return word.length === maxWordLength; });
    return finalWords[0];
}
;
var test1 = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
var test2 = ["w", "wo", "wor", "worl", "world"];
var test3 = ["m", "mo", "moc", "moch", "mocha", "l", "la", "lat", "latt", "latte", "c", "ca", "cat"];
var test4 = ["m", "ma", "mat", "math", "s", "sc", "sci", "scie", "scien", "scienc", "science", "a", "ar", "art"];
console.log(longestWord(test1));
console.log(longestWord(test2));
console.log(longestWord(test3));
console.log(longestWord(test4));
function coneVolume(h, r) {
    return (h / 3) * (Math.PI * (Math.pow(r, 2))) ? Number(((h / 3) * (Math.PI * (Math.pow(r, 2)))).toFixed(2)) : 0;
}
