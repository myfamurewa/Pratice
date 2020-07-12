function lookAndSay(num) {
    let previousStr = '1';
    let curStr = ""


    for(let i = 0; i < num ; i++){
        let counter = 1;
        let curDigit = previousStr[0];
        for(let j = 1; j < previousStr; j++){
            if (previousStr[j] === curDigit){
                counter += 1;
            } else {
                curStr = curStr + counter + curDigit
                curDigit = previousStr[j]
                counter = 1
            }
        }
        curStr = curStr + counter + curDigit
        previousStr = curStr
        curStr = ""
    }
   return previousStr
}