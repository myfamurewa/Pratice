function strongestEven(n: number, m: number): number {
    let strongest = 0;
    let num: number;
    for(let i = n; i <= m; i++){
        if(i % 2 === 0){
            let currentStrength = findStrength(i)
         if(currentStrength > strongest){
            strongest = currentStrength
            num = i
         }
        } else {
            continue
        }
    }
    return num
}
function strongestEvenV2(n: number, m: number): number {
    if(n < m) return -1
    let best = 1;
    while(true){
        let ceiling = n / best + (n % best === 0? 0 : 1);
        let floor = m / best;
        if (ceiling > floor) {
            best = best / 2;

            return best * (n/ best)
        }
        best *= 2;
    }
}
function findStrength(n: number): number {
    let strength = 0
    while(n % 2 === 0){
        n /= 2
        strength++
    }
    return strength
}

console.log(findStrength(16))
console.log(strongestEven(1,2))
console.log(strongestEven(5,10))
console.log(strongestEven(48, 56))