function isPowerOfThree(n: number): boolean {
    return n > 0 && 1162261467 % n == 0;
};

function isPowerOfThreeII(n: number): boolean {
    if (n == 0) return false
    while ( n % 9 === 0){
        n /= 9
    }
    return (n === 1 || n === 3)
}