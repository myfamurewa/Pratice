function mostCommonWord(paragraph: string, banned: string[]): string {
    let wordCount = {}
    let parArr = paragraph.replace(/[^a-zA-Z0-9\s]+/g, ' ').split(" ")
    for(const word of parArr){
        if(!word) continue
        if(wordCount[word.toLowerCase()]){
            wordCount[word.toLowerCase()] += 1
        } else {
            if(banned.includes(word.toLowerCase()) === false){
             wordCount[word.toLowerCase()] = 1   
            }
        }
    }
    let maxKey = ""
    let maxCount = 0
    console.log(wordCount)
    for(const key in wordCount){
        if(wordCount[key] > maxCount){
            maxKey = key
            maxCount = wordCount[key]
        }
    }
    return maxKey
};