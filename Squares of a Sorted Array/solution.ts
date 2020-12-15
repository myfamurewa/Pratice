function sortedSquares(nums: number[]): number[] {
    nums.sort((a,b) => Math.abs(a) - Math.abs(b))
    return nums.map(number => number**2) 
};