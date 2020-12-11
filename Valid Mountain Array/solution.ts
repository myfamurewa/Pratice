function validMountainArray(arr: number[]): boolean {
    if(arr.length < 3){
        return false
    }
    function leftCheck(arr: number[]): number {
        let last = arr[0]
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > last){
                last = arr[i]
            } else {
                return i - 1
            }
        }
    }

    function rightCheck(arr: number[]): number {
        let last = arr[arr.length - 1]
        for(let i = arr.length - 2; i >= 0; i--){
            if(arr[i] > last){
                last = arr[i]
            } else {
                return i + 1
            }
        }
    }
    return rightCheck(arr) === leftCheck(arr) ? true : false;
};