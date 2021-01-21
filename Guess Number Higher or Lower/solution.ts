function guessNumber(n: number): number {
    if(n == 1) return 1

    let left = 0
    let right = n
    while (left <= right){
        let mid = (left + right) / 2

        if (guess(mid) === 0){
            return mid
        } else if (guess(mid) == - 1){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
};