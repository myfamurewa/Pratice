function howMuchIsTrue(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === true){
            count++
        }
    }
    return count > 0? count:[]
}