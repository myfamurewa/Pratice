function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0
    let orangeCount = 0

    for(let i = 0; i < apples.length; i++){
        if(apples[i] + a  >= s && apples[i] + a <= t ){
            appleCount ++
        }
    }

    for(let j = 0; j < oranges.length; j++){
         if(oranges[j] + b  >= s && oranges[j] + b <= t ){
            orangeCount ++
        }
    }
    return appleCount  
}

console.log(countApplesAndOranges(2, 3, 7, ))