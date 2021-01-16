function getMaximumGenerated(n: number): number {
    let generated = [0, 1]
    if(n < 2){
        return n
    }
    for(let i = 2; i <= n; i++){
        if(i%2 === 0){
            generated[i] = generated[i/2]
        } else {
            generated[i] = generated[Math.floor(i/2)] + generated[Math.floor(i/2) + 1]
        }
    }
    return Math.max(...generated)
}; 