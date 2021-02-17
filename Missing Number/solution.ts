function missingNumber(nums: number[]): number {
    let max = nums.length + 1
    let actual = nums.reduce((acc, cv) => {
      return  acc + cv
    }, 0)
    let expected = 0
    for(let i = 0; i < max; i++){
        expected += i
    }
    return expected - actual
};