function maxArea(height: number[]): number {
    let max = Number.MIN_VALUE
    for(let i = 0; i < height.length; i++){
        for(let j = 9 + 1; j < height.length; j++){
            let min = Math.min(height[i], height[j])
            max= Math.max(max, min * (j - i));
        }
    }
    return max
};

function maxAreaII(height: number[]): number {
    let max = Number.MIN_VALUE
    let left = 0;
    let right  = height.length - 1;
    while(left < right){
        let min = Math.min(height[right], height[left])
        max = Math.max(max, min * (right - left));
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return max
}