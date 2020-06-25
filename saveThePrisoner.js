function saveThePrisoners(n, m, s) {
    // n = number of prisoner
    //m = number of sweets
    // s = the chair number to begin passing the sweets from
    // the last sweet is actually foul tasting and we need to warn the prisoner that receives it
    let chair = s
    let passed = 0
    for(let i = m; i > 0; i--){
        if(i === 1){
            return chair
        }
        if (chair === n) {
            chair = 1
        }
 
        if(passed === n){
            chair = s
            passed = 0
        }  
       passed++
       chair++
    }
    return "failed"
}

console.log(saveThePrisoners(5, 2, 1))
console.log(saveThePrisoners(5, 2, 2))

function saveThePrisonerSimple(n, m, s) {
    let a=(s+m-1)%n;
    return a == 0 ? n : a;
}

console.log(saveThePrisonerSimple(5, 2, 1))
console.log(saveThePrisonerSimple(5, 2, 2))