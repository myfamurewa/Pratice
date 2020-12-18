function increasingTriplet(nums: number[]): boolean {
    if(!nums || nums.length < 3){
        return false
    }

    let minOne = Infinity
    let minTwo = Infinity

    for(let i = 0; i < nums.length; i++){
        if (nums[i] < minOne) {
            minOne = nums[i];
        }

        if (nums[i] > minOne) {
            minTwo = Math.min(nums[i], minTwo);
        }

        if (nums[i] > minTwo) {
            return true;
        }
    }
    return false;
};