function countOdds(low: number, high: number): number {
    let count = 0;
    for(let i = low; i <= high; i++){
        if(i % 2 === 1){
            count++
        }
    }
    return count
};

function countOddsV2(low: number, high: number): number {
    let count = 0;
    let start: number;
    if(low%2 === 1){
        start = low
    } else {
        start = low + 1
    }
    for(let i = start; i <= high; i+= 2){
        if(i % 2 === 1){
            count++
        }
    }
    return count
}