function hammingWeight(n: number): number {
    if(n){
    return n.toString(2).match(/1/g).length
    }
    return 0
};