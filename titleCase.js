function titleCase(title, minorWords) {
    minorArr = minorWords.split(" ").map(word => {
    return    word.toLowerCase()
    });
    titleArr = title.split(" ")
    for(let i = 0; i < titleArr.length; i++){
        if(i === 0){
            titleArr[0] = titleArr[0][0].toUpperCase() + titleArr[0].substring(1).toLowerCase()
        } else {
            if(minorArr.includes(titleArr[i].toLowerCase())){
                titleArr[i] = titleArr[i].toLowerCase()
            } else{
            titleArr[i] = titleArr[i][0].toUpperCase() + titleArr[i].substring(1).toLowerCase()
            }
        }
    }
    capitalizedTitle = titleArr.join(" ")
    return capitalizedTitle
}

console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))