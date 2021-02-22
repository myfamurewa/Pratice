function brokenCalc(X: number, Y: number): number {
    let steps = 0
    if(X === Y) return steps
    while(X !== Y){
        if(X < Y){
            X *= 2
        } else {
            X -= 1
        }
        steps++
    }
    return steps
};

function brokenCalcII(X: number, Y: number): number {
    let ans = 0
    while (X < Y) {
        ans++
        if (Y % 2) Y++
        else Y /= 2
    }
    return X - Y + ans
}

console.log(brokenCalc(2, 3))
console.log(brokenCalc(5, 8))