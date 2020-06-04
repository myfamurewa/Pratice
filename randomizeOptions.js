const level1 = ["A", "B", "C", "D", "E"];
const level2 = ["F", "G", "H", "I", "J"];
const level3 = ["K", "L", "M", "N", "O"];
const level4 = ["P", "Q", "R", "S", "T"];
const level5 = ["U", "V", "W", "X", "Y","Z"];


const randomizeOptions = (level, answer, option1, option2, option3, option4, option5) => {
    let tempLevel = level;
    if (option1 === null) {
        option1 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
        tempLevel.splice(tempLevel.indexOf(option1), 1)
    }
    if (option2 === null) {
        option2 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
        tempLevel.splice(tempLevel.indexOf(option2), 1)
    }
    if (option3 === null) {
        option3 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
        tempLevel.splice(tempLevel.indexOf(option3), 1)
    }
    if (option4 === null) {
        option4 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
        tempLevel.splice(tempLevel.indexOf(option4), 1)
    }
    if (option5 === null) {
        option5 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
        tempLevel.splice(tempLevel.indexOf(option5), 1)
    }
    if (option1 !== answer || option2 !== answer || option3 !== answer || option4 !== answer || option4 !== answer) {
        option2 = answer;
    }
    return `${option1}, ${option2}, ${option3}, ${option4}, ${option5}`;
}

// let opt = randomizeOptions(level1, "A", null, null, null, null);
// console.log(opt)

const randomOptions = (level, answer) => {
    let options = []
    for(let i = 0; i < 4; i++ ){
        options.push(level[Math.floor(Math.random() * level.length)])
    }
    if(options.includes(answer) === false){
        options[Math.floor(Math.random() * level.length)] = answer
    }
    let setify = new Set(...options)
    console.log(setify)
    return options

}
console.log(randomOptions(level2, "I"))
console.log(randomOptions(level1, "A"))

function areThereTwo( arr ) {
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) != arr.finalIndexOf(arr[i])){
            return arr.indexof(arr[i])
        } else {

        }
    }
}