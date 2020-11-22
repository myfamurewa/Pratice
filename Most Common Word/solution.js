var mostCommonWord = function(paragraph, banned) {

    let newParagraph;
    let count = {}
    banned.length >= 1? newParagraph = paragraph.filter(word => banned.includes(word.toLowerCase()) === false).split(" ") : newParagraph = paragraph.split(" ");
    for(let i in newParagraph){
        if(count[newParagraph]){
            count[newParagraph] += 1
        } else {
            count[newParagraph] = 1
        }
    }
    return Object.entries(count).sort((a,b) => a[1] - b[1])[0][0]

}